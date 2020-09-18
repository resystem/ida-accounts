import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Subtitle, Text, Button, TextInput } from '@resystem/design-system';

import { emailValidation } from '../../utils/inputValidations';

import { sendEmailValidation } from '../../controllers/user.registry.controller';

const Header = styled.header`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px auto 70px;
  grid-auto-rows: min-content;
  min-height: 100%;
`;

const Content = styled.div`
  padding-top: ${({ theme }) => theme.spacingStack.xs};
`;

const Space = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xs};
`;

const SpaceXXS = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;

const ButtonContainer = styled.div`
  width: 100%;
  button {
    width: 100%;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Paragraph = styled.p`
  width: 100%;
  color: #fff;
  font-size: 16px;
  line-height: 18px;
`;

const LindDecoration = styled.a`
  :link,
  :visited,
  :hover,
  :active {
    text-decoration: underline;
    color: ${({ theme }) => theme.brandColor.secondary.medium};
  }
`;

interface Props {
  goToStep: (newStep: number) => void;
  ida: string;
  previousStep: () => void;
}

interface InputState {
  value: string;
  error: string;
}

interface IContentForm {
  buttonEnable: boolean;
  email: InputState;
  handleEmailChange: (newValue: string) => void;
  handleSendCode: (event: React.SyntheticEvent) => void;
  ida: string;
  goToStep: (newStep: number) => void;
}

interface IContentSuccessMessage {
  email: InputState;
  handleSendCode: (event: React.SyntheticEvent<EventTarget>) => void;
  previousInternalStep: () => void;
  sentTime: number;
}

const inputTextValidation = (props: InputState): boolean => {
  return props.error.length > 0 || !(props.value.length > 0);
};

const ContentForm = (props: IContentForm): JSX.Element => {
  const {
    buttonEnable,
    email,
    handleEmailChange,
    handleSendCode,
    ida,
    goToStep,
  } = props;

  return (
    <>
      <Header>
        {/* <IconButton icon="arrow_back_ios" /> */}
        <div onClick={() => goToStep(2)}>
          <Text>Voltar</Text>
        </div>
      </Header>
      <Content>
        <SpaceXXS />
        <Subtitle type="h3">
          Digite seu e-mail para confirmar sua identidade
        </Subtitle>
        <Space />
        <TextInput
          id="email"
          label="E-mail"
          type="mail"
          value={email.value}
          error={email.error}
          onChange={(newValue: string) => {
            handleEmailChange(newValue);
          }}
        />
        <SpaceXXS />
      </Content>
      <Footer>
        <div>
          <Button disabled={buttonEnable} onClick={handleSendCode}>
            Enviar e-mail
          </Button>
        </div>
      </Footer>
    </>
  );
};

const ContentSuccessMessage = (props: IContentSuccessMessage): JSX.Element => {
  const { email, handleSendCode, previousInternalStep, sentTime } = props;

  type MessageProp = {
    sentParam: number;
  };

  const MessageTitle = (params: MessageProp): JSX.Element => {
    const { sentParam } = params;
    if (sentParam > 1) {
      return (
        <Subtitle type="h3" className="text-success">
          E-mail reenviado!
        </Subtitle>
      );
    }

    return <Subtitle type="h3">Enviamos um e-mail pra você!</Subtitle>;
  };

  const MessageFooter = (params: MessageProp): JSX.Element => {
    const { sentParam } = params;
    if (sentParam > 1) {
      return (
        <>
          <Paragraph className="text-right">Não recebeu ?</Paragraph>
          <Paragraph className="text-right">
            Conferir o endereço digitado
          </Paragraph>
        </>
      );
    }

    return (
      <>
        <Paragraph className="text-right">
          Não recebeu ?
          <LindDecoration href="#" onClick={handleSendCode}>
            Reenviar código
          </LindDecoration>
        </Paragraph>
      </>
    );
  };

  return (
    <>
      <Header>
        {/* <IconButton icon="arrow_back_ios" /> */}
        <div onClick={() => previousInternalStep()}>
          <Text>Voltar</Text>
        </div>
      </Header>
      <Content>
        <SpaceXXS />
        <MessageTitle sentParam={sentTime} />
        <Space />
        <Paragraph className="text-left">
          Acesse o e-mail enviado para {email.value} e clique no link para
          confirmar o seu cadastro
        </Paragraph>
        <Space />
      </Content>
      <Footer>
        <div>
          <MessageFooter sentParam={sentTime} />
        </div>
      </Footer>
    </>
  );
};

const EmailConfirmation: React.FC<Props> = ({
  goToStep,
  ida,
  previousStep,
}) => {
  const [internalStep, setInternalStep] = useState<number>(0);
  const [sentTime, setSentTime] = useState<number>(0);
  const [email, setEmail] = useState<InputState>({
    value: '',
    error: '',
  });
  const [buttonEnable, setButtonEnable] = useState<boolean>(false);
  const nextInternalStep = () => setInternalStep((prev) => prev + 1);
  const previousInternalStep = () => setInternalStep((prev) => prev - 1);

  const handleSendCode = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    sendEmailValidation(ida, email.value).then((r) => {
      if (r.data) {
        console.log(r.data, ' ida ', ida);
        setSentTime((prev) => prev + 1);
        nextInternalStep();
      } else {
        const error: string = r?.error?.email || '';
        console.log('handleSendCode data: ', r.data);
        console.log('handleSendCode error: ', error);
        console.log('handleSendCode ida ', ida);

        setEmail((prev: InputState) => ({ ...prev, error }));
      }
    });
  };

  const handleEmailChange = (value: string): void => {
    const error = emailValidation(value);
    setEmail((prev) => ({ ...prev, value, error }));
  };

  useEffect(() => {
    setButtonEnable(inputTextValidation(email));
  }, [email]);

  useEffect(() => {
    console.log('setTime mudou ', sentTime);
  }, [sentTime]);

  return (
    <Wrapper>
      {internalStep === 0 && (
        <ContentForm
          buttonEnable={buttonEnable}
          email={email}
          goToStep={goToStep}
          handleSendCode={handleSendCode}
          handleEmailChange={handleEmailChange}
          ida={ida}
        />
      )}

      {internalStep > 0 && (
        <ContentSuccessMessage
          email={email}
          handleSendCode={handleSendCode}
          previousInternalStep={previousInternalStep}
          sentTime={sentTime}
        />
      )}
    </Wrapper>
  );
};

EmailConfirmation.propTypes = {
  goToStep: PropTypes.func.isRequired,
  ida: PropTypes.string.isRequired,
  previousStep: PropTypes.func.isRequired,
};

export default EmailConfirmation;
