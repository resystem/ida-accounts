import React, { useState } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import { Text, ButtonText, SmallText, Subtitle } from '@resystem/design-system';
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

const SuccessMessageTitle = () => {
  return (
    <>
      <Subtitle type="h2" className="text-success">
        E-mail reenviado!
      </Subtitle>
    </>
  );
};

interface IButtonResendEmail {
  handleClick: (value: string) => void;
}

const ButtonResendEmail = ({ handleClick }: IButtonResendEmail) => {
  return (
    <>
      <SmallText style={{ display: 'inline' }}>Não recebeu? </SmallText>
      <ButtonText white small onClick={handleClick}>
        Reenviar email
      </ButtonText>
    </>
  );
};

interface IButtonCheckEmail {
  handleClick: (value: string) => void;
}

const ButtonCheckEmail = ({ handleClick }: IButtonCheckEmail) => {
  return (
    <>
      <SmallText style={{ display: 'inline' }}>Não recebeu? </SmallText>
      <ButtonText white small onClick={handleClick}>
        Conferir o endereço digitado
      </ButtonText>
    </>
  );
};

/**
 * Component that containts SentEmail index page
 */
const SentEmail = ({ location }) => {
  const [resendEmail, setResendEmail] = useState<boolean>(false);
  const { email } = location.state;
  const handleClick = () => {
    sendResetPasswordEmail({ email });
    console.log('entrei aqui');
    setResendEmail(true);
  };

  return (
    <Main>
      <SEO title="Forget Password" />
      <Wrapper>
        <Content>
          <Header>
            <Brand />
          </Header>
          {resendEmail && <SuccessMessageTitle />}
          {!resendEmail && (
            <Subtitle type="h2">Enviamos um e-mail para você!</Subtitle>
          )}
          <Space />
          <Text>
            Acesse o e-mail enviado para {email} e clique no link para redefinir
            sua senha
          </Text>
        </Content>
        <Footer>
          <div>
            {resendEmail && (
              <ButtonCheckEmail
                onClick={() => {
                  navigate('/forget-password');
                }}
              />
            )}
            {!resendEmail && <ButtonResendEmail onClick={handleClick} />}
          </div>
          <SmallSpace />
        </Footer>
      </Wrapper>
    </Main>
  );
};

export default SentEmail;
