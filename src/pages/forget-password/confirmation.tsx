import React, { useState } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import {
  ButtonText,
  SmallText,
  Subtitle,
  CodeInput,
  Text,
} from '@resystem/design-system';
import Main from '../../components/main';
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
      xxs: string;
    };
  };
}

/**
 * Component that containts Confirmation index page
 */
const Confirmation = ({ location }) => {
 const { phone } = location.state;
  return (
    <Main>
      <SEO title="SMS Confirmation" />
      <Wrapper>
        <Content>
          <Header>
            <Brand />
          </Header>
          <ButtonText
            underline={false}
            white
            onClick={() => {
              navigate('/forget-password');
            }}
          >
            Voltar
          </ButtonText>
          <Space />
          <Subtitle type="h3">SMS enviado!</Subtitle>
          <Space />
          <Text>Insira o código enviado para {phone}</Text>
          <Space />
          <Form>
            <div>
              <CodeInput />
            </div>
          </Form>
        </Content>
        <Footer>
          <div>
            <SmallText style={{ display: 'inline' }}>Não recebeu? </SmallText>
            <ButtonText
              white
              small
              onClick={() => {
                navigate('');
              }}
            >
              Reenviar código
            </ButtonText>
          </div>
          <SmallSpace />
        </Footer>
      </Wrapper>
    </Main>
  );
};

export default Confirmation;
