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
import TermsOfUse from './TermsOfUse';
import InputFields from './InputFields';
import ChooseConfirmationMethod from './ChooseConfirmationMethod';
import SMSConfirmation from './SMSConfirmation';
import EmailConfirmation from './EmailConfirmation';

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

  const goToStep = (newStep: number) => setStep(newStep);
  const nextStep = () => setStep((prev: number) => prev + 1);
  const previousStep = () => setStep((prev: number) => prev - 1);

  useEffect(() => {
    setAppName('SOM');
  }, []);

  return (
    <Main>
      <SEO title="Signup" />
      {step === 0 && <TermsOfUse appName={appName} />}
      {step === 1 && (
        <InputFields
          appName={appName}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          nextStep={nextStep}
        />
      )}
      {step === 2 && <ChooseConfirmationMethod goToStep={goToStep} />}
      {step === 3 && <SMSConfirmation goToStep={goToStep} />}
      {step === 4 && <EmailConfirmation goToStep={goToStep} />}
    </Main>
  );
};

export default Signup;
