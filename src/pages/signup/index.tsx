import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
  ButtonText,
  SmallText,
  Subtitle,
  Button,
  Text,
  TextInput,
  CheckboxInput,
} from '@resystem/design-system';
import ConfirmationMessage from '../../components/signin-components/ConfirmationMessage';
import SendEmailCode from '../../components/signin-components/SendEmailCode';
import SendEmailCodeValidation from '../../components/signin-components/SendEmailCodeValidation';
import SEO from '../../components/seo';
import Brand from '../../components/brand/brand';
import TermsOfUse from '../../components/signin-components/TermsOfUse';
import InputFields from '../../components/signin-components/InputFields';
import ChooseConfirmationMethod from '../../components/signin-components/ChooseConfirmationMethod';
import SendSmsCode from '../../components/signin-components/SendSmsCode';
import SendSmsCodeValidation from '../../components/signin-components/SendSmsCodeValidation';
import SendEmailConfirmation from '../../components/signin-components/SendEmailConfirmation';
import SendSmsEmail from '../../components/signin-components/SendSmsEmail';
import { AppContext } from '../../store';

interface InputState {
  value: string;
  error: string;
}

const Signup: React.FC = () => {
  console.log('Signup');
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<InputState>({
    value: '',
    error: '',
  });
  const { appName } = useContext(AppContext);
  const [username, setUsername] = useState<InputState>({
    value: '',
    error: '',
  });
  const [password, setPassword] = useState<InputState>({
    value: '',
    error: '',
  });
  const [phone, setPhone] = useState<InputState>({
    value: '',
    error: '',
  });
  const [ida, setIda] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const goToStep = (newStep: number) => setStep(newStep);
  const nextStep = () => setStep((prev: number) => prev + 1);
  const previousStep = () => setStep((prev: number) => prev - 1);

  useEffect(() => {}, []);

  return (
    <>
      <SEO title="Signup" />
      {step === 0 && <TermsOfUse appName={appName} nextStep={nextStep} />}
      {step === 1 && (
        <InputFields
          appName={appName}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          nextStep={nextStep}
          setIda={setIda}
          setToken={setToken}
        />
      )}
      {step === 2 && <ChooseConfirmationMethod goToStep={goToStep} />}
      {step === 3 && (
        <SendSmsCode
          ida={ida}
          phone={phone}
          setPhone={setPhone}
          goToStep={goToStep}
          nextStep={nextStep}
        />
      )}
      {step === 4 && (
        <SendSmsCodeValidation
          ida={ida}
          phone={phone}
          goToStep={goToStep}
          nextStep={nextStep}
        />
      )}
      {/* {step === 5 && (
        <SendSmsEmail password={password.value} username={username.value} />
      )}
      {step === 6 && (
        <SendEmailConfirmation
          goToStep={goToStep}
          ida={ida}
          previousStep={previousStep}
        />
      )} */}
      {step === 5 && (
        <SendEmailCode
          email={email}
          goToStep={goToStep}
          ida={ida}
          nextStep={nextStep}
          setEmail={setEmail}
        />
      )}
      {step === 6 && (
        <SendEmailCodeValidation
          email={email}
          goToStep={goToStep}
          ida={ida}
          nextStep={nextStep}
        />
      )}
      {step === 7 && (
        <ConfirmationMessage
          username={username.value}
          password={password.value}
        />
      )}
    </>
  );
};

export default Signup;
