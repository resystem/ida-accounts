import Amplify, { Auth } from "aws-amplify";
import awsConfig from "./src/aws-exports";
import Provider from './src/components/provider';

Amplify.configure(awsConfig);
export const wrapRootElement = Provider;
