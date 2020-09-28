import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Animation,
  SmallText,
  Subtitle,
  Button,
  Text,
  TextInput,
} from '@resystem/design-system';

import { phoneMask, removePhoneMask } from '../../../utils/inputValidations';
import { sendPhoneValidation } from '../../../controllers/user.registry.controller';

import { Content, Footer, Header, Space, SpaceXXS, Wrapper } from '../styles';

interface Props {
  ida: string;
  goToStep: (newStep: number) => void;
  nextStep: () => void;
  setEmail: (value: any) => void;
  email: InputState;
}

interface InputState {
  value: string;
  error: string;
}

const inputTextValidation = (props: InputState): boolean => {
  return props.error.length > 0 || !(props.value.length < 15);
};

const SendSmsCode: React.FC<Props> = ({
  ida,
  goToStep,
  nextStep,
  email,
  setEmail,
}) => {
  const [buttonEnable, setButtonEnable] = useState(true);
  const [isLoadingButton, setIsLoadingButton] = useState<boolean>(false);

  const handleEmailChange = (value: string) => {
    const error = '';
    setEmail((prev: InputState) => ({
      ...prev,
      value: email,
      error,
    }));
  };

  const handleButtonClick = () => {
    setIsLoadingButton(true);
    sendPhoneValidation(ida, email.value)
      .then((r) => {
        if (r.data) {
          console.log('data ', r.data);
          setEmail((prev: InputState) => ({ ...prev, error: '' }));
          nextStep();
        } else if (r.error) {
          const error = r.error.phone;
          setEmail((prev: InputState) => ({ ...prev, error }));
        }
      })
      .finally(() => setIsLoadingButton(false));
  };

  useEffect(() => {
    console.log('ida ', ida);
    setButtonEnable(!inputTextValidation(email));
  }, [ida, email]);

  return (
    <Wrapper>
      <Header>
        {/* <IconButton icon="arrow_back_ios" /> */}
        <div onClick={() => goToStep(2)}>
          <Text>Voltar</Text>
        </div>
      </Header>
      <Animation>
        <Content>
          <SpaceXXS />
          <Subtitle type="h3">
            Insira o seu email para receber o código
          </Subtitle>
          <Space />
          <TextInput
            id="celular"
            label="Celular"
            value={email.value}
            error={email.error}
            onChange={(newValue: string) => handleEmailChange(newValue)}
          />
        </Content>
      </Animation>
      <Footer>
        <div>
          <Button
            disabled={buttonEnable}
            isLoading={isLoadingButton}
            onClick={handleButtonClick}
          >
            Enviar email
          </Button>
        </div>
      </Footer>
    </Wrapper>
  );
};

SendSmsCode.propTypes = {
  ida: PropTypes.string.isRequired,
  goToStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  email: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default SendSmsCode;
