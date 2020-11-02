import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import queryString from 'query-string';
import {
  Subtitle,
  Button,
  TextInput,
  Text,
  Animation,
} from '@resystem/design-system';
import Main from '../../components/main';
import SEO from '../../components/seo';
import Brand from '../../components/brand/brand';
import { resetPassword } from '../../controllers/user.controller';
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

/**
 * Component that containts newPassword index page
 */
const ResetPassword = ({ location }) => {
  const { token } = location.state;
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(true);

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
            <Subtitle type="h3">Crie uma nova senha</Subtitle>
            <Form>
              <TextInput
                type="password"
                label="Senha"
                value={password}
                onChange={handleOnChange}
                error={passwordError}
              />
            </Form>
          </Content>
          <Footer>
            <SmallSpace />
            <div>
              <Button small disabled={buttonEnabled} onClick={handleOnClick}>
                Próximo
              </Button>
            </div>
          </Footer>
        </Animation>
      </Wrapper>
    </Main>
  );
};

export default ResetPassword;
