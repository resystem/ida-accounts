import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Animation,
  Subtitle,
  Text,
  Button,
  TextInput,
} from '@resystem/design-system';

import { emailValidation } from '../../utils/inputValidations';

import { sendEmailValidation } from '../../controllers/user.registry.controller';

import {
  Content,
  Footer,
  Header,
  LindDecoration,
  Paragraph,
  Space,
  SpaceXXS,
  Wrapper,
} from './styles';

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
  isLoadingButton: boolean;
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
    isLoadingButton,
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
      <Animation>
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
      </Animation>
      <Footer>
        <div>
          <Button
            disabled={buttonEnable}
            isLoading={isLoadingButton}
            onClick={handleSendCode}
          >
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
      <Animation>
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
      </Animation>
      <Footer>
        <div>
          <MessageFooter sentParam={sentTime} />
        </div>
      </Footer>
    </>
  );
};

const SendEmailConfirmation: React.FC<Props> = ({
  goToStep,
  ida,
  previousStep,
}) => {
  console.log('ida', ida);
  const [internalStep, setInternalStep] = useState<number>(0);
  const [sentTime, setSentTime] = useState<number>(0);
  const [email, setEmail] = useState<InputState>({
    value: '',
    error: '',
  });
  const [isLoadingButton, setIsLoadingButton] = useState<boolean>(false);
  const [buttonEnable, setButtonEnable] = useState<boolean>(false);
  const nextInternalStep = () => setInternalStep((prev) => prev + 1);
  const previousInternalStep = () => setInternalStep((prev) => prev - 1);

  const handleSendCode = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    setIsLoadingButton(true);
    sendEmailValidation(ida, email.value)
      .then((r) => {
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
      })
      .finally(() => setIsLoadingButton(false));
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
          isLoadingButton={isLoadingButton}
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

SendEmailConfirmation.propTypes = {
  goToStep: PropTypes.func.isRequired,
  ida: PropTypes.string.isRequired,
  previousStep: PropTypes.func.isRequired,
};

export default SendEmailConfirmation;
