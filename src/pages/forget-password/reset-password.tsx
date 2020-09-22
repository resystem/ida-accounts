import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import queryString from 'query-string';
import { Subtitle, Button, TextInput, Text } from '@resystem/design-system';
import Main from '../../components/main';
import SEO from '../../components/seo';
import Brand from '../../components/brand/brand';
import {
  validateResetPasswordToken,
  resetPassword,
} from '../../controllers/user.controller';
import { passwordValidation } from '../../utils/inputValidations';

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxs};
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 70px;
  grid-auto-rows: min-content;
  min-height: 100%;
`;

const Content = styled.div``;

const Space = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xs};
`;

const SmallSpace = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxs};
`;

const Form = styled.form`
  margin-top: ${({ theme }) => theme.spacingStack.xs};
  margin-bottom: ${({ theme }) => theme.spacingStack.xs};
  display: grid;
  grid-gap: ${({ theme }) => theme.spacingStack.xxxs};
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

interface ThemeInterface {
  theme: {
    spacingStack: {
      xxs: string;
    };
  };
}

interface QueryInterface {
  token: string;
}

interface IResetPasswordForm {
  password: string;
  onChange: (value: string) => void;
  error: string;
}

const ResetPasswordForm = ({
  password,
  onChange,
  error,
}: IResetPasswordForm) => {
  return (
    <>
      <Subtitle type="h3">Crie uma nova senha</Subtitle>
      <Form>
        <TextInput
          type="password"
          label="Senha"
          value={password}
          onChange={onChange}
          error={error}
        />
      </Form>
    </>
  );
};

const InvalidTokenMessage = () => {
  return (
    <>
      <Subtitle type="h3" className="text-warning">
        Seu link expirou
      </Subtitle>
      <Space />
      <Text>
        O link que enviamos pra você só vale por 24h, mas é só apertar no botão
        abaixo pra recuperar seu acesso!
      </Text>
      <SmallSpace />
      <Button
        onClick={() => {
          navigate('/forget-password');
        }}
      >
        Recuperar acesso
      </Button>
    </>
  );
};

/**
 * Component that containts newPassword index page
 */
const ResetPassword = ({ location }) => {
  const [password, setPassword] = useState<string>('');
  const [isValidToken, setIsValidToken] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>('');
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(true);
  const { token }: QueryInterface = queryString.parse(location.search);

  const hasError = (string: string) => string.length > 0;

  const handleOnChangePassword = (value: string) => {
    setPasswordError(passwordValidation(value));
    setPassword(value);
  };

  const handleOnClick = () => {
    resetPassword({ password, token })
      .then((res) => {
        navigate('/forget-password/sucess-resetpassword');
      })
      .catch((err) => console.log('erro'));
  };
  useEffect(() => {
    const validate = validateResetPasswordToken({ token }).then((res) => {
      if (res.data !== null) setIsValidToken(true);

      setButtonEnabled(hasError(passwordError));
    });
  }, [passwordError]);

  return (
    <Main>
      <SEO title="New Password" />
      <Wrapper>
        <Content>
          <Header>
            <Brand />
          </Header>
          {isValidToken && (
            <ResetPasswordForm
              password={password}
              onChange={handleOnChangePassword}
              error={passwordError}
            />
          )}
          {!isValidToken && <InvalidTokenMessage />}
        </Content>
        <Footer>
          <SmallSpace />
          {isValidToken && (
            <div>
              <Button small disabled={!password} onClick={handleOnClick}>
                Próximo
              </Button>
            </div>
          )}
        </Footer>
      </Wrapper>
    </Main>
  );
};

export default ResetPassword;
