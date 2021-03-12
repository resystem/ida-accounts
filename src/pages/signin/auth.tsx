import React, { useState, useEffect, useContext } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import {
  ButtonText,
  SmallText,
  Subtitle,
  Button,
  TextInput,
} from '@resystem/design-system';
import SEO from '../../components/seo';
import Brand from '../../components/brand/brand';
import { AppContext } from '../../store';
import { signin } from '../../controllers/user.controller';

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

interface Props {
  location: {
    state?: {
      username?: string;
    };
  };
}

interface ThemeInterface {
  theme: {
    spacingStack: {
      xxs: String;
    };
  };
}

interface Errors {
  username?: string;
  password?: string;
}

interface EventInterface {
  preventDefault(): void;
}

/**
 * Component that containts signin index page
 */
const Auth = ({ location }: Props) => {
  const { appName, appSource, socket, clientId } = useContext(AppContext);
  console.log('Auth -> clientId', clientId);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (location.state && location.state.username) {
      setUsername(location.state.username);
      setPassword('');
    }
  }, []);

  return (
    <>
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
          <Form
            autoComplete="off"
            onSubmit={(e: EventInterface) => {
              e.preventDefault();
              signin({
                clientId,
                socket,
                username,
                password,
                setErrors,
                setLoading,
                appSource,
              });
            }}
          >
            <TextInput
              value={username}
              onChange={setUsername}
              autoComplete="off"
              error={errors.username}
              label="Usuário"
            />
            <TextInput
              type="password"
              error={errors.password}
              autoComplete="off"
              value={password}
              onChange={setPassword}
              label="Senha"
            />
          </Form>
        </Content>
        <Footer>
          <div>
            <ButtonText
              white
              small
              onClick={() => {
                navigate('/forget-password', { replace: true });
              }}
            >
              Esqueceu sua senha?
            </ButtonText>
          </div>
          <div>
            <ButtonText
              white
              small
              onClick={() => {
                navigate('/signup');
              }}
            >
              Ainda não tem conta? Cadastre-se!
            </ButtonText>
          </div>
          <SmallSpace />
          <div>
            <Button
              onClick={(e: EventInterface) => {
                e.preventDefault();
                signin({
                  clientId,
                  socket,
                  username,
                  password,
                  setErrors,
                  setLoading,
                  appSource,
                });
              }}
              disabled={!password || !username}
            >
              Entrar
            </Button>
          </div>
        </Footer>
      </Wrapper>
    </>
  );
};

export default Auth;
