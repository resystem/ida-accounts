import {
  signup as signupRepository,
  sendEmailValidation as sendEmailValidationRepository,
  sendEmailValidationToken as sendEmailValidationTokenRepository,
  sendPhoneValidation as sendPhoneValidationRepository,
  sendPhoneValidationCode as sendPhoneValidationCodeRepository,
} from '../repositories/user.repository';
import { status, types } from '../utils/ida-error.util';

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

export const signup = async (
  username: string,
  password: string
): Promise<GenericResponse<string>> => {
  let promise;
  const response: GenericResponse<string> = { data: null, error: null };
  try {
    promise = await signupRepository({ username, password });
  } catch (err) {
    const { error } = err.response.data;

    if (error && error === 'auth/duplicated-user') {
      response.error = {
        username: 'Nome de usuário já em uso',
      };
    }
    return response;
    throw err;
  }

  const { data } = promise;
  response.data = {
    ida: data.data.ida,
    token: data.data.token,
  };

  return response;
};

/**
 * function to send the IDA account verication by email on IDA api
 * @param {string} ida user ida repesents the identity of the user
 * @param {string} email user email to be send the validation
 * @returns {Pomise} request response
 */
export const sendEmailValidation = async (
  ida: string,
  email: string
): Promise<GenericResponse<string>> => {
  let promise;
  const response: GenericResponse<string> = { data: null, error: null };
  try {
    promise = await sendEmailValidationRepository(ida, email);
  } catch (err) {
    const { error } = err.response.data;

    if (error && error === 'email/invalid-email') {
      response.error = {
        email: 'Email inválido',
      };
    } else if (error && error === 'email/invalid-ida') {
      response.error = {
        email: 'IDA inválido',
      };
    }
    return response;
  }

  response.data = { send: true };

  return response;
};

/**
 * function to validate the IDA account verication by email on IDA api
 * @param {string} ida user ida repesents the identity of the user
 * @param {string} token user token to be validated
 * @returns {Pomise} request response
 */
export const sendEmailValidationToken = async (
  ida: string,
  phone: string
): Promise<GenericResponse<string>> => {
  let promise;
  const response: GenericResponse<string> = { data: null, error: null };
  try {
    promise = await sendEmailValidationTokenRepository(ida, phone);
  } catch (err) {
    const { error } = err.response.data;

    if (error && error === 'email/invalid-email') {
      response.error = {
        error: 'Email inválido',
      };
    } else if (error && error === 'email/invalid-ida') {
      response.error = {
        error: 'IDA inválido',
      };
    } else if (error && error === 'email/invalid-token') {
      response.error = {
        error: 'Token inválido',
      };
    } else if (error && error === 'email/expired-token') {
      response.error = {
        error: 'Token expirado',
      };
    }
    return response;
  }

  const { data } = promise;
  response.data = data;

  return response;
};

/**
 * function to send IDA account verication code by phone on IDA api
 * @param {string} ida user ida repesents the identity of the user
 * @param {string} phone user to be send the code
 * @returns {Pomise} request response
 */
export const sendPhoneValidation = async (
  ida: string,
  phone: string
): Promise<GenericResponse<string>> => {
  let promise;
  const response: GenericResponse<string> = { data: null, error: null };
  try {
    promise = await sendPhoneValidationRepository(ida, phone);
  } catch (err) {
    const { error } = err.response.data;

    if (error && error === 'phone/invalid-number') {
      response.error = {
        phone: 'Número inválido',
      };
    } else if (error && error === 'phone/invalid-ida') {
      response.error = {
        phone: 'IDA inválido',
      };
    }
    return response;
  }

  const { data } = promise;
  response.data = {
    ida: data.data.ida,
    phone: data.data.phone,
  };

  return response;
};

/**
 * function to validate IDA account verication code by phone on IDA api
 * @param {string} ida user ida repesents the identity of the user
 * @param {string} code use code to be validated
 * @returns {Pomise} request response
 */
export const sendPhoneValidationCode = async (
  ida: string,
  code: string
): Promise<GenericResponse<string>> => {
  let promise;
  const response: GenericResponse<string> = { data: null, error: null };
  try {
    promise = await sendPhoneValidationCodeRepository(ida, code);
  } catch (err) {
    const { error } = err.response.data;

    if (error && error === 'phone/invalid-number') {
      response.error = {
        code: 'Número inválido',
      };
    } else if (error && error === 'phone/invalid-ida') {
      response.error = {
        code: 'IDA inválido',
      };
    } else if (error && error === 'phone/invalid-code') {
      response.error = {
        code: 'Código inválido',
      };
    }
    return response;
  }

  const { data } = promise;
  response.data = {
    ida: data.ida,
    phone: data.phone,
    email: data.email,
    usernamer: data.username,
    token: data.token,
  };

  return response;
};
