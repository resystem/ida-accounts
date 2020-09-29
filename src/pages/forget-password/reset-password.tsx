import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import {
  Subtitle,
  Button,
  TextInput,
  Animation,
} from '@resystem/design-system';
import ErrorMessage from '../../components/ error-message/error-message';
import Main from '../../components/main';
import SEO from '../../components/seo';
import Brand from '../../components/brand/brand';
import { resetPassword } from '../../controllers/user.controller';
import { passwordValidation } from '../../utils/inputValidations';
import iconSucess from '../../images/iconSucess.svg';

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

const ContentMessage = styled.div`
  display: flex;
  justify-contet: center;
  align-items: center;
  flex-direction: column;
  margin: 100px auto;
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
  passwordError: string;
  buttonEnabled: boolean;
  onClick: (value: string) => void;
  onChange: (value: string) => void;
}

const ResetPasswordForm = ({
  password,
  passwordError,
  onChange,
  onClick,
  buttonEnabled,
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
          error={passwordError}
        />
      </Form>
      <Footer>
        <SmallSpace />
        <div>
          <Button small disabled={buttonEnabled} onClick={onClick}>
            Próximo
          </Button>
        </div>
      </Footer>
    </>
  );
};

/**
 * Component that containts ResetPassword index page
 */
const ResetPassword = ({ location }) => {
  const token = location.state ? location.state.token : null;
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(true);
  const [isErrorPage, setIsErrorPage] = useState<boolean>(false);

  const hasError = (string: string) => string.length > 0;

  const handleOnChange = (value: string) => {
    setPasswordError(passwordValidation(value));
    setButtonEnabled(hasError(passwordValidation(value)));
    setPassword(value);
  };

  const handleOnClick = () => {
    resetPassword({ password, token })
      .then((res) => {
        navigate('/forget-password/sucess');
      })
      .catch((err) => console.log('erro'));
  };

  useEffect(() => {
    if (token === null) {
      setIsErrorPage(true);
    }
  }, [token]);

  return (
    <Main>
      <SEO title="New Password" />
      <Wrapper>
        <Animation>
          <Content>
            <Header>
              <Brand />
            </Header>
            {isErrorPage && (
              <ErrorMessage
                onClick={() => {
                  navigate('/forget-password');
                }}
              />
            )}
            {!isErrorPage && (
              <ResetPasswordForm
                password={password}
                passwordError={passwordError}
                onChange={handleOnChange}
                onClick={handleOnClick}
                buttonEnabled={buttonEnabled}
              />
            )}
          </Content>
        </Animation>
      </Wrapper>
    </Main>
  );
};

export default ResetPassword;
