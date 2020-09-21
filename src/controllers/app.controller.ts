import {
  verify as verifyRepository,
} from '../repositories/app.repository';

interface VerifyInterface {
  appId: string;
  appKey: string;
  setAppName(appName: string): void;
  setLoading(loading: boolean): void; 
} 

/**
 * function to valdiate and request authentication to the repository
 * @param {object} data user information to validate and authenticate
 * @param {string} data.appId application id to be verify
 * @param {string} data.appKey application token to be used on verification
 * @param {string} data.setAppName function to set app on state
 * @param {string} data.setLoading function to set setLoading on state
 */
export const verify = async ({ appId, appKey, setAppName, setLoading }: VerifyInterface) => {
  setLoading(true);
  let response;
  try {
    response = await verifyRepository({ appId, appKey });
  } catch (err) {
    console.log([err]);
    throw err;
  }

  setAppName(response.data.name);
  setLoading(false);
}
