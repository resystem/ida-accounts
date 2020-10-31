import React, { useState } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import { Subtitle, Button, TextInput } from '@resystem/design-system';
import SEO from '../../components/seo';
import Brand from '../../components/brand/brand';
import {
  sendResetPasswordEmail,
  sendResetPasswordSMS,
} from '../../controllers/user.controller';

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
      xxs: String;
    };
  };
}

/**
 * Component that containts newPassword index page
 */
const newPassword = () => {
  const [password, setPassword] = useState<string>('');
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);

  return (
    <>
      <SEO title="New Password" />
      <Wrapper>
        <Content>
          <Header>
            <Brand />
          </Header>
          <Subtitle type="h3">Crie uma nova senha</Subtitle>
          <Form>
            <TextInput
              type="password"
              label="Senha"
              error={
                isValidPassword &&
                'A senha deve conter no mínimo 8 caracteres, com pelo menos uma letra e um número'
              }
              value={password}
              onChange={setPassword}
            />
          </Form>
        </Content>
        <Footer>
          <SmallSpace />
          <div>
            <Button small disabled={!password}>
              Próximo
            </Button>
          </div>
        </Footer>
      </Wrapper>
    </>
  );
};

export default newPassword;
