import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  ButtonText,
  SmallText,
  Subtitle,
  Button,
  TextInput,
} from '@resystem/design-system';
import Main from '../../components/main';
import SEO from '../../components/seo';
import Brand from '../../components/brand/brand';

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

/**
 * Component that containts signin index page
 */
const Auth = () => {
  const [appName, setAppName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    setAppName('SOM');
  }, []);

  return (
    <Main>
      <SEO title="Auth" />
      <Wrapper>
        <Content>
          <Header>
            <Brand />
          </Header>
          <SmallText>{`Entre no ${appName} através IDa!`}</SmallText>
          <Space />
          <Subtitle type="h3">
            Agora utilizamos a IDa para autenticar seu login
          </Subtitle>
          <Form>
            <TextInput
              value={username}
              onChange={setUsername}
              label="Usuário ou e-mail"
            />
            <TextInput
              type="password"
              value={password}
              onChange={setPassword}
              label="Senha"
            />
          </Form>
        </Content>
        <Footer>
          <div>
            <ButtonText white small>
              Esqueceu sua senha?
            </ButtonText>
          </div>
          <SmallSpace />
          <div>
            <Button disabled={!password || !username}>Entrar</Button>
          </div>
        </Footer>
      </Wrapper>
    </Main>
  );
};

export default Auth;
