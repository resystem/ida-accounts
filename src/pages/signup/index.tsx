import React, { useState, useEffect } from 'react';
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
import Main from '../../components/main';
import SEO from '../../components/seo';
import Brand from '../../components/brand/brand';
import TermsOfUse from './components/TermsOfUse';
import InputFields from './components/InputFields';
import ChooseConfirmationMethod from './components/ChooseConfirmationMethod';
import SendSmsCode from './components/SendSmsCode';
import SendSmsCodeValidation from './components/SendSmsCodeValidation';
import SendEmailConfirmation from './components/SendEmailConfirmation';
import SendSmsEmail from './components/SendSmsEmail';

interface InputState {
  value: string;
  error: string;
}

const Signup: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [appName, setAppName] = useState<string>('');
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

  useEffect(() => {
    setAppName('SOM');
  }, []);

  return (
    <Main>
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
      {step === 5 && (
        <SendSmsEmail password={password.value} username={username.value} />
      )}
      {step === 6 && (
        <SendEmailConfirmation
          goToStep={goToStep}
          ida={ida}
          previousStep={previousStep}
        />
      )}
    </Main>
  );
};

export default Signup;
