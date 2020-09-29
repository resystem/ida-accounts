import React, { useState } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import { Button, Subtitle, Animation } from '@resystem/design-system';
import Main from '../../components/main';
import SEO from '../../components/seo';
import Brand from '../../components/brand/brand';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

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

const IconSucess = styled(CheckCircleIcon)`
  color: #84eaa7;
`;

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
 * Component that containts SucessResetPassword index page
 */
const SucessResetPassword = () => {
  return (
    <Main>
      <SEO title="Sucess reset password" />
      <Wrapper>
        <Animation>
          <Content>
            <Header>
              <Brand />
            </Header>
            <ContentMessage>
              <IconSucess style={{ width: '72px', height: '72px' }} />
              <Space />
              <Subtitle type="h3">Senha criada com sucesso!</Subtitle>
            </ContentMessage>
          </Content>
          <Footer>
            <div>
              <Button
                small
                onClick={() => {
                  navigate('/signin/auth');
                }}
              >
                Entrar
              </Button>
            </div>
            <SmallSpace />
          </Footer>
        </Animation>
      </Wrapper>
    </Main>
  );
};

export default SucessResetPassword;
