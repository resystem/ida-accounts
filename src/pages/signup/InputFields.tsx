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

import Brand from '../../components/brand/brand';

import {
  usernameValidation,
  passwordValidation,
} from '../../utils/inputValidations';

import { signup } from '../../controllers/user.controller';

const Header = styled.header`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px auto 70px;
  grid-auto-rows: min-content;
  min-height: 100%;
`;

const Content = styled.div`
  padding-top: ${({ theme }) => theme.spacingStack.xs};
`;

const Space = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xs};
`;

const SpaceXXS = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

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
  nextStep: (newStep: number) => void;
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
    signup({
      username: username.value,
      password: password.value,
    })
      .then((r) => console.log('then signup ', r))
      .catch((r) => console.log('catch signup ', r));
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
        <SpaceXXS />
        <ButtonText white small onClick={handleRedirectLogin}>
          Já é cadastrado? Faça login
        </ButtonText>
        <SpaceXXS />
        <Subtitle type="h3">Criando sua IDa</Subtitle>
        <SpaceXXS />
        <ButtonText white small>
          Saiba mais sobre a IDa
        </ButtonText>
        <SpaceXXS />
        <TextInput
          label="Nome do usuário"
          value={username.value}
          error={username.error}
          onChange={(newValue: string) => handleUsernameChange(newValue)}
        />
        <SpaceXXS />
        <TextInput
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
};

export default InputFields;
