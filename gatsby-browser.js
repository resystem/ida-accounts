import Amplify, { Auth } from "aws-amplify";
import awsConfig from "./src/aws-exports";
import Provider from './src/components/provider';
import '@resystem/design-system/dist/main.css';

Amplify.configure(awsConfig);
export const wrapRootElement = Provider;
