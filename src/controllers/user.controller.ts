import { navigate } from '@reach/router';
import { isEmail, isPhone } from '../utils/validations';
import {
  signin as signinRepository,
  signup as signupRepository,
  verifyToken as verifyTokenRepository,
  requestResetPassword,
  sendEmailValidation as sendEmailValidationRepository,
  sendEmailValidationToken as sendEmailValidationTokenRepository,
  sendPhoneValidation as sendPhoneValidationRepository,
  sendPhoneValidationCode as sendPhoneValidationCodeRepository,
} from '../repositories/user.repository';
import { status, types } from '../utils/ida-error.util';
import { saveUserOnLocalStorage } from '../utils/localStorage.util';

interface Errors {
  username?: string;
  password?: string;
}

interface UserLogin {
  username: string;
  password: string;
}
interface SigninParams extends UserLogin {
  appSource: any;
  setErrors(error: Errors): void;
  setLoading(status: boolean): void;
}

interface UserLocalStorage {
  ida: string;
  token: string;
}

/**
 * function to valdiate and request authentication to the repository
 * @param {object} data user information to validate and authenticate
 * @param {string} data.username user username
 * @param {string} data.password user password
 * @param {string} data.setErrors function to set errors on story
 * @param {string} data.setLoading function to set loading state on story
 * @param {string} data.appSource parent Window object
 */
export const signin = async ({
  username,
  password,
  setErrors,
  setLoading,
  appSource,
}: SigninParams): Promise<void> => {
  console.log('test');
  setLoading(true);
  setErrors({});
  let signinResponse;
  try {
    signinResponse = await signinRepository({ username, password });
  } catch (err) {
    if (err.response && err.response.data && err.response.data.error) {
      const { error } = err.response.data;
      switch (error) {
        case types.WRONG_PASSWORD:
          setErrors({ password: status[error] });
          return;
        case types.USER_NOT_FOUND:
          setErrors({ username: status[error] });
          return;
        default:
          return;
      }
    }

    setLoading(false);
    throw err;
  }

  if (signinResponse.data) {
    const { ida, token, username } = signinResponse.data;
    const stringifiedData = JSON.stringify({
      ida,
      token,
    });

    saveUserOnLocalStorage({ ida, token, user: { username } });
    if (appSource) appSource.postMessage(stringifiedData, '*');
  }

  setErrors({});
  setLoading(false);
};

interface BaisSigninParams {
  ida: string;
  token: string;
  username: string;
  appSource: any;
}

/**
 * function to request token validaiton on IDA api
 * @param {object} data user information to validate and authenticate
 * @param {string} data.token user username
 * @param {string} data.token user token
 * @param {string} data.ida user ida
 * @param {string} data.appSource parent Window object
 */
export const basicSignin = async ({
  username,
  ida,
  token,
  appSource,
}: BaisSigninParams) => {
  console.log('test in basic signin');
  try {
    await verifyTokenRepository(token);
  } catch (err) {
    navigate('/signin/auth', { state: { username } });
    throw err;
  }

  const stringifiedData = JSON.stringify({
    ida,
    token,
  });


  console.log('has app source', !!appSource);
  if (appSource) appSource.postMessage(stringifiedData, '*');
};

interface SendResetPasswordEmailParams {
  email: string;
  setEmailError(error: string): void;
}

/**
 * function to send email password reset
 * @param {object} data user information to send email password reset
 * @param {string} data.email email
 *
 */
export const sendResetPasswordEmail = async ({
  email,
  setEmailError,
}: SendResetPasswordEmailParams) => {
  const isValidEmail = isEmail(email);
  if (!isValidEmail) {
    setEmailError('Informe um e-mail válido');
    return;
  }
  setEmailError('');
  try {
    await requestResetPassword(email);
  } catch (err) {
    console.log(err);
    throw err;
  }
  navigate('/forget-password/sent-email', { state: { email } });
};

interface SendResetPasswordSMSParams {
  phone: string;
  setValidPhone(isValid: boolean): void;
}

export const sendResetPasswordSMS = async ({
  phone,
  setValidPhone,
}: SendResetPasswordSMSParams) => {
  const isValidPhone = isPhone(phone);
  if (!phone) {
    setValidPhone(isValidPhone);
    return;
  }
  setValidPhone(isValidPhone);
  try {
    await requestResetPassword(phone);
  } catch (err) {
    throw err;
  }
};
