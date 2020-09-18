import axios from 'axios';

interface SigninData {
  username: string;
  password: string;
}

/**
 * function to request login on IDA api
 * @param {object} data user information to be send with the request
 * @param {string} data.username user username
 * @param {string} data.password user password
 * @returns {Pomise} request response
 */
export const signin = ({ username, password }: SigninData) => {
  return axios.post(
    `${process.env.API_URI}/login`,
    { username, password },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }
  );
};

interface SignupData {
  username: string;
  password: string;
}

/**
 * function to request user register on IDA api
 * @param {object} data user information to be send with the request
 * @param {string} data.username user username
 * @param {string} data.password user password
 * @returns {Pomise} request response
 */
export const signup = ({ username, password }: SignupData) => {
  return axios.post(`${process.env.API_URI}/signup`, {
    username,
    password,
  });
};

/**
 * function to request user verication by token on IDA api
 * @param {string} token user token to be send with the request
 * @returns {Pomise} request response
 */
export const verifyToken = (token: string) =>
  axios.post(
    `${process.env.API_URI}/validate-token`,
    { token },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }
  );

export const requestResetPassword = async (input: string) => {
  return axios.post(`${process.env.API_URI}/request-reset-password`, {
    input,
  });
};

export const validateResetPasswordToken = async (token: string) => {
  return axios.post(`${process.env.API_URI}/validate-reset-password-token`, {
    token,
  });
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
): Promise<any> => {
  return axios.post(`${process.env.API_URI}/send-email-validation`, {
    ida,
    email,
  });
};

/**
 * function to validate the IDA account verication by email on IDA api
 * @param {string} ida user ida repesents the identity of the user
 * @param {string} token user token to be validated
 * @returns {Pomise} request response
 */
export const sendEmailValidationToken = async (
  ida: string,
  token: string
): Promise<any> => {
  return axios.post(`${process.env.API_URI}/validate-email-token`, {
    ida,
    token,
  });
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
): Promise<any> => {
  return axios.post(`${process.env.API_URI}/phone-generate-code`, {
    ida,
    phone,
  });
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
): Promise<any> => {
  return axios.post(`${process.env.API_URI}/phone-validate-code`, {
    ida,
    code,
  });
};
