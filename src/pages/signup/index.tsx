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
import SMSValidation from './SMSValidation';
import EmailConfirmation from './EmailConfirmation';
import SMSValidationEmail from './SMSValidationEmail';

interface InputState {
  value: string;
  error: string;
}

const Signup: React.FC = () => {
  const [step, setStep] = useState<number>(2);
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
  const [ida, setIda] = useState<string>('5f63922a456bc52068ad0a5e');
  const [token, setToken] = useState<string>(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hbGV0dGEiLCJpZGEiOiI1ZjYzOTIyYTQ1NmJjNTIwNjhhZDBhNWUiLCJpYXQiOjE2MDAzNjEwMDMsImV4cCI6MTYwMDM2NDYwM30.td443NqdJDyu4Ka5xOizIe1nX0ouUn0UMmVkM6dikJo'
  );

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
        <SMSConfirmation
          ida={ida}
          phone={phone}
          setPhone={setPhone}
          goToStep={goToStep}
          nextStep={nextStep}
        />
      )}
      {step === 4 && (
        <SMSValidation
          ida={ida}
          phone={phone}
          goToStep={goToStep}
          nextStep={nextStep}
        />
      )}
      {step === 5 && <SMSValidationEmail appName={appName} />}
      {step === 6 && (
        <EmailConfirmation
          goToStep={goToStep}
          ida={ida}
          previousStep={previousStep}
        />
      )}
    </Main>
  );
};

export default Signup;
