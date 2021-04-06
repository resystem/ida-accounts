import React, { useState, useEffect, useContext } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import {
  ButtonText,
  SmallText,
  Subtitle,
  Text,
  Button,
} from '@resystem/design-system';
import SEO from '../../components/seo';
import Brand from '../../components/brand/brand';
import { AppContext } from '../../store';

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

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

/**
 * Component that containts signin index page
 */
const Signin: React.FC = () => {
  const { appName } = useContext(AppContext);

  return (
    <>
      <SEO title="Signin" />
      <Wrapper>
        <Content>
          <Header>
            <Brand />
          </Header>
          <SmallText>{`Entre no ${appName} através da IDa!`}</SmallText>
          <Space />
          <Subtitle type="h3">
            Agora utilizamos a IDa para autenticar seu login
          </Subtitle>
          <Space />
          <ButtonText
            white
            small
            onClick={() => {
              navigate('/signup');
            }}
          >
            Ainda não tem conta? Cadastre-se!
          </ButtonText>
          <Space />
          <Text>
            Se você já tinha uma conta anteriormente, utilize os mesmos dados
            para efetuar o login.
          </Text>
          <Space />
          <ButtonText white small>
            Saiba mais sobre a IDa
          </ButtonText>
        </Content>
        <Footer>
          <div>
            <Button
              onClick={() => {
                navigate('/signin/auth');
              }}
            >
              Proxímo
            </Button>
          </div>
        </Footer>
      </Wrapper>
    </>
  );
};

export default Signin;
