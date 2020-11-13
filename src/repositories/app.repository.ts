import axios from 'axios';

interface VerifyData {
  appId: string;
  appKey: string;
}

/**
 * function to request application verify on IDA api
 * @param {object} data user information to be send with the request
 * @param {string} data.appId application id to be verify
 * @param {string} data.appToken application token to be used on verification
 * @returns {Pomise} request response
 */
export const verify = ({ appId, appKey }: VerifyData) => {
  return axios.post(
    `${process.env.GATSBY_API_URI}/verify-app`,
    { appId, appKey },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }
  );
};
