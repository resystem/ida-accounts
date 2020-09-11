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
    },
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
}

/**
 * function to request user verication by token on IDA api
 * @param {string} token user token to be send with the request
 * @returns {Pomise} request response 
 */
export const verifyToken = (token: string) => axios.post(
  `${process.env.API_URI}/validate-token`,
  { token },
  {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  },
);
