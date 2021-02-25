import { navigate } from '@reach/router';
import { string } from 'prop-types';
import { isEmail, isPhone } from '../utils/inputValidations';
import {
  signin as signinRepository,
  signup as signupRepository,
  verifyToken as verifyTokenRepository,
  requestResetPassword as resetPasswordRespository,
  validateResetPasswordCode as validateResetPasswordCodeRepository,
  sendEmailValidation as sendEmailValidationRepository,
  sendEmailValidationToken as sendEmailValidationTokenRepository,
  sendPhoneValidation as sendPhoneValidationRepository,
  sendPhoneValidationCode as sendPhoneValidationCodeRepository,
  requestCodeRepository,
  validateCodeRepository,
  sendNewPassword,
} from '../repositories/user.repository';
import { status, types } from '../utils/ida-error.util';
import { saveUserOnLocalStorage } from '../utils/localStorage.util';

interface GenericData<T> {
  [key: string]: T | boolean | number;
}
interface GenericError {
  [key: string]: string;
}

type GenericResponse<T> = {
  data: GenericData<T> | null | undefined;
  error: GenericError | null | undefined;
};

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
  socket: any;
  clientId: String,
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
  socket,
  clientId,
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
    console.log('signinResponse', signinResponse);
  } catch (err) {
    console.log('err', err);
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
    const { ida, token, username, phone, email } = signinResponse.data;
    console.log('ida, token, username,', ida, token, username,);
    const fiedData = {
      username,
      ida,
      token,
      redirect: true,
      phone,
      email,
    };
    console.log('socket', socket);
    socket.emit('update_auth', { user: fiedData, client_id: clientId })

    saveUserOnLocalStorage({ ida, token, user: { username } });
  }

  setErrors({});
  setLoading(false);
};

interface BaisSigninParams {
  ida: string;
  token: string;
  clientId: string;
  username: string;
  appSource: any;
  socket: any;
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
  clientId,
  token,
  appSource,
  socket,
}: BaisSigninParams) => {
  let response;

  try {
    response = await verifyTokenRepository(token);
  } catch (err) {
    navigate('/signin/auth', { state: { username } });
    throw err;
  }

  const { email, phone } = response.data;
  const fiedData = {
    ida,
    token,
    username,
    email,
    phone,
  };

  console.log('has app source?', !!appSource);
  socket.emit('update_auth', { user: fiedData, client_id: clientId })
};

interface SendResetPasswordParams {
  input: string;
  ida?: string;
}

export const sendResetPassword = async ({
  input,
  ida,
}: SendResetPasswordParams): Promise<GenericResponse<string>> => {
  const response: GenericResponse<string> = { data: null, error: null };
  const userIDA = ida || '';
  let promise;
  try {
    promise = await resetPasswordRespository(input);
  } catch (err) {
    console.log(err);
    const { error } = err.response.data;
    if (error === 'reset-code/invalid-input') {
      response.error = {
        code: 'Código inválido',
      };
    }
    // throw err;
    return response;
  }
  response.data = {
    status: promise.data.status,
  };
  return response;
};

type ValidateResetPasswordCodeParams = {
  code: string;
};

interface ValidateResetPasswordCodeResponse {
  error: string | null;
  token: string | null;
}

export const validateResetPasswordCode = async ({
  code,
}: ValidateResetPasswordCodeParams) => {
  const response: ValidateResetPasswordCodeResponse = {
    error: null,
    token: null,
  };
  let promise = null;
  try {
    promise = await validateResetPasswordCodeRepository(code);
  } catch (err) {
    const { error } = err.response.data;
    if (error === 'user/not_found') {
      response.error = 'Código inválido';
    } else {
      response.error = error;
    }
    return response;
    throw err;
  }
  const { data } = promise;
  response.token = data.token;
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
    promise = await sendNewPassword(token, password);
  } catch (err) {
    const { error } = err.response.data;
    response.error = error;
    return response;
  }
  const { data } = promise;
  response.ida = data.data.ida;
  return response;
};

export const requestCode = async ({
  input,
  ida,
}: SendResetPasswordParams): Promise<GenericResponse<string>> => {
  const response: GenericResponse<string> = { data: null, error: null };
  const userIDA = ida || '';
  let promise;
  try {
    promise = await requestCodeRepository(input, userIDA);
  } catch (err) {
    console.log(err);
    const { error } = err.response.data;
    if (error === 'reset-code/invalid-input') {
      response.error = {
        code: 'Código inválido',
      };
    }
    // throw err;
    return response;
  }
  response.data = {
    status: promise.data.status,
  };
  return response;
};

export const validateCode = async ({
  code,
}: ValidateResetPasswordCodeParams) => {
  const response: ValidateResetPasswordCodeResponse = {
    error: null,
    token: null,
  };
  let promise = null;
  try {
    promise = await validateCodeRepository(code);
  } catch (err) {
    const { error } = err.response.data;
    if (error === 'user/not_found') {
      response.error = 'Código inválido';
    } else {
      response.error = error;
    }
    return response;
    throw err;
  }
  const { data } = promise;
  response.token = data.token;
  return response;
};
