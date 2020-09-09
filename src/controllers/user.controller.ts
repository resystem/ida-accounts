import { navigate } from "@reach/router";
import {
  signin as signinRepository,
  verifyToken as verifyTokenRepository,
} from '../repositories/user.repository';
import { status, types } from '../utils/ida-error.util';

interface Errors {
  username?: string;
  password?: string;
}

interface SigninParams {
  username: string;
  password: string;
  appSource: any;
  setErrors(error: Errors): void; 
  setLoading(status: boolean): void; 
}

interface UserLocalStorage {
  ida: string
  token: string
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
  username, password, setErrors, setLoading,
  appSource,
}: SigninParams) => {
  setLoading(true);
  setErrors({});
  let signinResponse;
  try {
    signinResponse = await signinRepository({ username, password })
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
    const index = parsedLocalUsers.findIndex((user: UserLocalStorage) => user.ida === ida);
    const data = { ida, token, user };

    if (index !== -1) {
      parsedLocalUsers.splice(index, 1, data);
    } else {
      parsedLocalUsers.push(data);
    }

    window.localStorage.setItem('ida@users', JSON.stringify({ users: parsedLocalUsers }));

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
export const basicSignin = async ({ username, ida, token, appSource }: BaisSigninParams) => {
  try {
    await verifyTokenRepository(token);
  } catch(err) {
    navigate('/signin/auth', { state: { username } });
    throw err;
  }
  
  const stringifiedData = JSON.stringify({
    ida,
    token,
  });

  if (appSource) appSource.postMessage(stringifiedData, '*');
};
