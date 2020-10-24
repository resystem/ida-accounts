import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import {
  ButtonText,
  SmallText,
  Subtitle,
  CodeInput,
  Text,
  Animation,
} from '@resystem/design-system';
import Main from '../../components/main';
import SEO from '../../components/seo';
import Brand from '../../components/brand/brand';
import {
  sendResetPassword,
  validateResetPasswordCode,
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

interface ISuccessMessageTitle {
  email: string;
}

const SuccessMessageTitle = ({ email }: ISuccessMessageTitle) => {
  return (
    <>
      <Subtitle type="h3" className="text-success">
        {email ? 'Email' : 'SMS'} reenviado!
      </Subtitle>
    </>
  );
};

/**
 * Component that containts Confirmation index page
 */
const Confirmation = ({ location }) => {
  const { phone, email } = location.state;
  const [code, setCode] = useState<string>('');
  const [resendCode, setResendCode] = useState<boolean>(false);
  const [codeError, setCodeError] = useState<string>('');

  const codeSize = 4;

  const handleClick = () => {
    sendResetPassword({ input: email || phone });
    setResendCode(true);
  };

  const handleOnChange = (value: string) => {
    setCode(value);
  };

  useEffect(() => {
    if (codeSize === code.length) {
      const validate = validateResetPasswordCode({ code }).then((res) => {
        if (res.token) {
          navigate('/forget-password/reset-password', {
            state: { token: res.token },
          });
          setCodeError('');
        } else {
          setCodeError('Código inválido');
        }
      });
    }
  }, [code]);

  return (
    <Main>
      <SEO title="Code Confirmation" />
      <Wrapper>
        <Animation>
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
            {resendCode && <SuccessMessageTitle email={email} />}
            {!resendCode && (
              <Subtitle type="h3">
                {email ? 'Email enviado!' : ' SMS enviado!'}
              </Subtitle>
            )}
            <Space />
            <Text>Insira o código enviado para {phone || email}</Text>
            <Space />
            <Form>
              <div>
                <CodeInput
                  onChange={handleOnChange}
                  error={codeError}
                  codeSize={4}
                />
              </div>
            </Form>
          </Content>
          <Footer>
            <div>
              <SmallText style={{ display: 'inline' }}>Não recebeu? </SmallText>
              <ButtonText white small onClick={handleClick}>
                Reenviar código
              </ButtonText>
            </div>
            <SmallSpace />
          </Footer>
        </Animation>
      </Wrapper>
    </Main>
  );
};

export default Confirmation;
