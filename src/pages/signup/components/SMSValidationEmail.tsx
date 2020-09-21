import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Subtitle, Text, Button, TextInput } from '@resystem/design-system';

import Brand from '../../../components/brand/brand';

import { emailValidation } from '../../../utils/inputValidations';
import {
  ButtonContainer,
  Content,
  LindDecoration,
  Header,
  Paragraph,
  Space,
  SpaceXXS,
  Wrapper,
} from '../styles';

interface Props {
  appName: string;
}

interface InputState {
  value: string;
  error: string;
}

interface IContentForm {
  buttonEnable: boolean;
  email: InputState;
  handleEmailChange: (newValue: string) => void;
  nextStep: () => void;
}

type IContentSuccessMessage = Props;

const inputTextValidation = (props: InputState): boolean => {
  return props.error.length > 0 || !(props.value.length > 0);
};

const ContentForm = (props: IContentForm): JSX.Element => {
  const { buttonEnable, email, handleEmailChange, nextStep } = props;
  const handleButtonClick = () => nextStep();
  return (
    <>
      <Subtitle type="h3">
        Quase pronto! Agora só precisamos do seu e-mail
      </Subtitle>
      <Space />
      <TextInput
        id="email"
        label="E-mail"
        type="mail"
        value={email.value}
        error={email.error}
        onChange={(newValue: string) => {
          handleEmailChange(newValue);
        }}
      />
      <SpaceXXS />
      <ButtonContainer>
        <Button disabled={buttonEnable} onClick={handleButtonClick}>
          Finalizar
        </Button>
      </ButtonContainer>
    </>
  );
};

const ContentSuccessMessage = (props: IContentSuccessMessage): JSX.Element => {
  const { appName } = props;
  return (
    <>
      <Subtitle type="h3">Seu cadastro foi confirmado!</Subtitle>
      <SpaceXXS />
      <Paragraph className="text-left">
        Você pode entrar no{' '}
        <LindDecoration href="#"> portal da IDa </LindDecoration> a qualquer
        momento para conhecer outras iniciativas
      </Paragraph>
      <Space />
      <ButtonContainer>
        <Button>Continuar para o {appName}</Button>
      </ButtonContainer>
    </>
  );
};

const SMSValidationEmail: React.FC<Props> = ({ appName }) => {
  const [step, setStep] = useState<number>(0);
  const [email, setEmail] = useState<InputState>({
    value: '',
    error: '',
  });
  const [buttonEnable, setButtonEnable] = useState<boolean>(false);

  const handleEmailChange = (value: string): void => {
    const error = emailValidation(value);
    setEmail((prev) => ({ ...prev, value, error }));
  };

  const nextStep = () => setStep((prev) => prev + 1);

  useEffect(() => {
    setButtonEnable(inputTextValidation(email));
  }, [email]);

  return (
    <Wrapper>
      <Header>
        <Brand />
      </Header>
      <Content>
        <SpaceXXS />

        {step === 0 && (
          <ContentForm
            buttonEnable={buttonEnable}
            email={email}
            handleEmailChange={handleEmailChange}
            nextStep={nextStep}
          />
        )}

        {step === 1 && <ContentSuccessMessage appName={appName} />}
      </Content>
    </Wrapper>
  );
};

SMSValidationEmail.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default SMSValidationEmail;
