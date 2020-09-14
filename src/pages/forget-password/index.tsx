import React, { useState } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import {
  ButtonText,
  SmallText,
  Subtitle,
  Button,
  SwitchButton,
  TextInput,
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
      xxs: String;
    };
  };
}

/**
 * Component that containts ForgetPassword index page
 */
const ForgetPassword = () => {
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isValidPhone, setValidPhone] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');
  const [selectedSwitch, setSelectedSwitch] = useState<number>(0);

  const handleClick = () => {
    switch (selectedSwitch) {
      case 0:
        sendResetPasswordEmail({ setEmailError, email });
        break;
      default:
        sendResetPasswordSMS({ setValidPhone, phone });
    }
  };

  return (
    <Main>
      <SEO title="Forget Password" />
      <Wrapper>
        <Content>
          <Header>
            <Brand />
          </Header>
          <SmallText>Esqueci minha senha</SmallText>
          <Space />
          <Subtitle type="h3">
            Insira o seu e-mail ou celular cadastrado na IDa
          </Subtitle>
          <Form>
            <SwitchButton
              small
              selectedIndex={selectedSwitch}
              onClick={({ index }) => setSelectedSwitch(index)}
            />
            {selectedSwitch ? (
              <TextInput
                type="text"
                label="Celular"
                error={isValidPhone && 'Informe um celular válido'}
                value={phone}
                onChange={setPhone}
              />
            ) : (
              <TextInput
                type="email"
                label="Email"
                error={emailError}
                value={email}
                onChange={setEmail}
              />
            )}
          </Form>
        </Content>
        <Footer>
          <div>
            <SmallText>Lembrei! </SmallText>
            <ButtonText
              white
              small
              onClick={() => {
                navigate('/signin/auth');
              }}
            >
              Volta ao login
            </ButtonText>
          </div>
          <SmallSpace />
          <div>
            <Button small disabled={!email} onClick={handleClick}>
              Próximo
            </Button>
          </div>
        </Footer>
      </Wrapper>
    </Main>
  );
};

export default ForgetPassword;
