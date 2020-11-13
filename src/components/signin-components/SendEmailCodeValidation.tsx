import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Animation, Subtitle, Text, CodeInput } from '@resystem/design-system';

import { phoneMask, removePhoneMask } from '../../utils/inputValidations';
import {
  validateResetPasswordCode,
  sendResetPassword,
} from '../../controllers/user.controller';

import {
  Content,
  Header,
  LindDecoration,
  Space,
  SpaceXXS,
  Paragraph,
  Wrapper,
} from './styles';

interface InputState {
  value: string;
  error: string;
}

interface Props {
  ida: string;
  email: InputState;
  goToStep: (newStep: number) => void;
  nextStep: () => void;
}

const inputTextValidation = (props: InputState): boolean => {
  return props.error.length > 0 || !(props.value.length < 15);
};

const MessageTitle = (sentTime: number): JSX.Element => {
  if (sentTime < 1) {
    return <Subtitle type="h3">E-mail enviado!</Subtitle>;
  }
  return (
    <Subtitle type="h3" className="text-success">
      E-mail reenviado!
    </Subtitle>
  );
};

const MessageSubtitle = (sentTime: number, email: string): JSX.Element => {
  if (sentTime < 2) {
    return (
      <>
        <Paragraph className="text-left">
          Insira o código enviado para
        </Paragraph>
        <Paragraph className="text-left">{email}</Paragraph>
      </>
    );
  }
  return (
    <>
      <Paragraph className="text-left">Seu e-mail é {email} ?</Paragraph>
      <Paragraph className="text-left">Se não for, volte p/ corrigir</Paragraph>
    </>
  );
};

const SendEmailCodeValidation: React.FC<Props> = ({
  ida,
  email,
  goToStep,
  nextStep,
}) => {
  const [sentTime, setSentTime] = useState<number>(0);
  const [code, setCode] = useState<InputState>({
    value: '',
    error: '',
  });
  const codeSize = 4;

  const handleValidateCode = (newCode: string) => {
    if (newCode.length === codeSize) {
      validateResetPasswordCode({ code: newCode }).then((r) => {
        console.log('response ', r);
        if (r.token) {
          console.log('data ', r.token);
          setCode(() => ({ value: newCode, error: '' }));
          nextStep();
        } else if (r.error) {
          console.log('set code error ', r.error);
          const errorCode = r.error || '';
          setCode((prev: InputState) => ({
            ...prev,
            error: errorCode,
          }));
        }
      });
    } else {
      setCode((prev: InputState) => ({ ...prev, error: '' }));
    }
  };

  const handleSendCodeToEmail = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    sendResetPassword({ input: email.value }).then((r) => {
      if (r.data) {
        console.log('send email code data ', r.data);
        setSentTime((prev) => prev + 1);
      }
    });
  };

  return (
    <Wrapper>
      <Header>
        {/* <IconButton icon="arrow_back_ios" /> */}
        <div onClick={() => goToStep(5)}>
          <Text>Voltar</Text>
        </div>
      </Header>
      <Animation>
        <Content>
          <SpaceXXS />
          {MessageTitle(sentTime)}
          <SpaceXXS />
          {MessageSubtitle(sentTime, email.value)}
          <Space />
          <CodeInput
            onChange={handleValidateCode}
            codeSize={codeSize}
            error={code.error}
          />
          <Paragraph className="text-right">
            Não recebeu ?
            <LindDecoration href="#" onClick={handleSendCodeToEmail}>
              Reenviar código
            </LindDecoration>
          </Paragraph>
        </Content>
      </Animation>
    </Wrapper>
  );
};

SendEmailCodeValidation.propTypes = {
  ida: PropTypes.string.isRequired,
  email: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
  goToStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default SendEmailCodeValidation;
