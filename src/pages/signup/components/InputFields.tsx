import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  ButtonText,
  SmallText,
  Subtitle,
  Button,
  Text,
  TextInput,
} from '@resystem/design-system';

import Brand from '../../../components/brand/brand';

import {
  usernameValidation,
  passwordValidation,
} from '../../../utils/inputValidations';

import { signup } from '../../../controllers/user.registry.controller';

import {
  Content,
  Footer,
  Header,
  LindDecoration,
  Paragraph,
  Space,
  SpaceXXS,
  SpaceXXXS,
  Wrapper,
} from '../styles';

interface InputState {
  value: string;
  error: string;
}

interface Props {
  appName: string;
  username: InputState;
  setUsername: (value: any) => void;
  password: InputState;
  setPassword: (value: any) => void;
  nextStep: () => void;
  setIda: (ida: string) => void;
  setToken: (token: string) => void;
}

const inputTextValidation = (props: InputState): boolean => {
  return props.error.length > 0 || !(props.value.length > 0);
};

const InputFields: React.FC<Props> = ({
  appName,
  username,
  setUsername,
  password,
  setPassword,
  nextStep,
  setIda,
  setToken,
}) => {
  const [buttonEnable, setButtonEnable] = useState(
    inputTextValidation(username) || inputTextValidation(password)
  );
  const handleRedirectLogin = () => window.location.replace('/signin');

  const handleUsernameChange = (value: string) => {
    const error = usernameValidation(value);
    setUsername((prev: InputState) => ({ ...prev, value, error }));
  };

  const handlePasswordChange = (value: string) => {
    const error = passwordValidation(value);
    setPassword((prev: InputState) => ({ ...prev, value, error }));
  };

  const handleButtonClick = () => {
    signup(username.value, password.value).then((r) => {
      if (r.data) {
        console.log(r.data, 'data from send username');
        setIda(r.data.ida.toString());
        setToken(r.data.token.toString());
        nextStep();
      } else if (r.error) {
        setUsername((prev: InputState) => ({
          ...prev,
          error: r.error?.username,
        }));
      }
    });
  };

  useEffect(() => {
    if (inputTextValidation(username) || inputTextValidation(password)) {
      setButtonEnable(true);
    } else {
      setButtonEnable(false);
    }
  }, [username, password]);

  return (
    <Wrapper>
      <Header>
        <Brand />
      </Header>
      <Content>
        <SmallText>{`Inscreva-se no ${appName} através da IDa!`}</SmallText>
        <SpaceXXXS />
        <ButtonText white small onClick={handleRedirectLogin}>
          Já é cadastrado? Faça login
        </ButtonText>
        <SpaceXXXS />
        <Subtitle type="h3">Criando sua IDa</Subtitle>
        <SpaceXXXS />
        <ButtonText white small>
          Saiba mais sobre a IDa
        </ButtonText>
        <SpaceXXS />
        <TextInput
          id="nome"
          label="Nome do usuário"
          value={username.value}
          error={username.error}
          onChange={(newValue: string) => handleUsernameChange(newValue)}
        />
        <SpaceXXXS />
        <TextInput
          id="senha"
          label="Senha"
          type="password"
          value={password.value}
          error={password.error}
          onChange={(newValue: string) => handlePasswordChange(newValue)}
        />
      </Content>
      <Footer>
        <div>
          <Button disabled={buttonEnable} onClick={() => handleButtonClick()}>
            Proxímo
          </Button>
        </div>
      </Footer>
    </Wrapper>
  );
};

InputFields.propTypes = {
  appName: PropTypes.string.isRequired,
  username: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
  setUsername: PropTypes.func.isRequired,
  password: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
  setPassword: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  setIda: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
};

export default InputFields;
