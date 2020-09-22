import { navigate } from '@reach/router';
<<<<<<< HEAD
import { isEmail, isPhone } from '../utils/inputValidations';
=======
import { string } from 'prop-types';
import { isEmail, isPhone } from '../utils/validations';
>>>>>>> 5e5eb14e77d2b840829275f261e15ab0791adc25
import {
  signin as signinRepository,
  signup as signupRepository,
  verifyToken as verifyTokenRepository,
  requestResetPassword,
<<<<<<< HEAD
  validateResetPasswordToken as validateResetPasswordTokenRepository,
  resetPassword as resetPasswordRespository,
=======
  sendEmailValidation as sendEmailValidationRepository,
  sendEmailValidationToken as sendEmailValidationTokenRepository,
  sendPhoneValidation as sendPhoneValidationRepository,
  sendPhoneValidationCode as sendPhoneValidationCodeRepository,
>>>>>>> 5e5eb14e77d2b840829275f261e15ab0791adc25
} from '../repositories/user.repository';
import { status, types } from '../utils/ida-error.util';
import { string } from 'prop-types';

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

  if (signinResponse.data.data) {
    const { ida, token, user } = signinResponse.data.data;
    const stringifiedData = JSON.stringify({
      ida,
      token,
    });

    window.localStorage.setItem('ida@id', ida);
    window.localStorage.setItem('ida@token', token);

    const localUsers = window.localStorage.getItem('ida@users') || '{}';
    const parsedLocalUsers = JSON.parse(localUsers).users || [];
    const index = parsedLocalUsers.findIndex(
      (userFounded: UserLocalStorage) => userFounded.ida === ida
    );
    const data = { ida, token, user };

    if (index !== -1) {
      parsedLocalUsers.splice(index, 1, data);
    } else {
      parsedLocalUsers.push(data);
    }

    window.localStorage.setItem(
      'ida@users',
      JSON.stringify({ users: parsedLocalUsers })
    );

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

  if (appSource) appSource.postMessage(stringifiedData, '*');
};

interface SendResetPasswordEmailParams {
  email: string;
<<<<<<< HEAD
=======
  setEmailError(error: string): void;
>>>>>>> 5e5eb14e77d2b840829275f261e15ab0791adc25
}

/**
 * function to send email password reset
 * @param {object} data user information to send email password reset
 * @param {string} data.email email
 *
 */
export const sendResetPasswordEmail = async ({
  email,
}: SendResetPasswordEmailParams) => {
  try {
    await requestResetPassword(email);
  } catch (err) {
    console.log(err);
    throw err;
  }
  navigate('/forget-password/confirmation', { state: { email } });
};

interface SendResetPasswordSMSParams {
  phone: string;
}

/**
 * function to send phone password reset
 * @param {object} data user information to send email password reset
 * @param {string} data.email email
 *
 */
export const sendResetPasswordSMS = async ({
  phone,
}: SendResetPasswordSMSParams) => {
  try {
    await requestResetPassword(`+55${phone.replace(/\D/g, '')}`);
  } catch (err) {
    console.log(err);
    throw err;
  }
  navigate('/forget-password/confirmation', { state: { phone } });
};

type ValidateResetPasswordTokenParams = {
  token: string;
};

interface ValidateResetPasswordTokenResponse {
  error: string | null;
  data: any;
}

export const validateResetPasswordToken = async ({
  token,
}: ValidateResetPasswordTokenParams) => {
  const response: ValidateResetPasswordTokenResponse = {
    error: null,
    data: null,
  };
  let promise = null;
  try {
    promise = await validateResetPasswordTokenRepository(token);
  } catch (err) {
    const { error } = err.response.data;
    response.error = error;
    return response;
    throw err;
  }
  const { data } = promise;
  response.data = data.data;
  return response;
};

interface ResetPasswordParams {
  token: string;
  password: string;
}

interface ResetPasswordResponse {
  error: string | null;
  ida: string | null;
}

export const resetPassword = async ({
  token,
  password,
}: ResetPasswordParams): Promise<ResetPasswordResponse> => {
  const response: ResetPasswordResponse = { error: null, ida: null };
  let promise = null;
  try {
    promise = await resetPasswordRespository(token, password);
  } catch (err) {
    const { error } = err.response.data;
    response.error = error;
    return response;
    throw err;
  }
  const { data } = promise;
  response.ida = data.data.ida;
  return response;
};
