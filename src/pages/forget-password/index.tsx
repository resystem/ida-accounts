import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import {
  phoneMask,
  emailValidation,
  phoneValidation,
} from '../../utils/inputValidations';
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
      xxs: string;
    };
  };
}

/**
 * Component that containts ForgetPassword index page
 */
const ForgetPassword = () => {
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [selectedSwitch, setSelectedSwitch] = useState<number>(0);
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(true);

  const hasError = (string: string) => string.length > 0;

  const handleOnChangePhone = (value: string) => {
    const mask = phoneMask(value);
    setPhoneError(phoneValidation(mask));
    setPhone(mask);
  };

  const handleOnChangeEmail = (value: string) => {
    setEmailError(emailValidation(value));
    setEmail(value);
  };

  const handleClick = () => {
    switch (selectedSwitch) {
      case 0:
        sendResetPasswordEmail({ email });
        break;
      default:
        sendResetPasswordSMS({ phone });
    }
  };

  useEffect(() => {
    if (selectedSwitch === 1) {
      if (phone) {
        setButtonEnabled(hasError(phoneError));
      } else {
        setButtonEnabled(true);
      }
    } else if (selectedSwitch === 0) {
      if (email) {
        setButtonEnabled(hasError(emailError));
      } else {
        setButtonEnabled(true);
      }
    }
  }, [phoneError, emailError, selectedSwitch, phone, email]);

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
                error={phoneError}
                value={phone}
                onChange={handleOnChangePhone}
                id="celular"
              />
            ) : (
              <TextInput
                type="email"
                label="Email"
                error={emailError}
                value={email}
                onChange={handleOnChangeEmail}
                id="email"
              />
            )}
          </Form>
        </Content>
        <Footer>
          <div>
            <SmallText style={{ display: 'inline' }}>Lembrei! </SmallText>
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
            <Button small disabled={buttonEnabled} onClick={handleClick}>
              Próximo
            </Button>
          </div>
        </Footer>
      </Wrapper>
    </Main>
  );
};

export default ForgetPassword;
