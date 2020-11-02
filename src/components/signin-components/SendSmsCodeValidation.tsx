import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Animation, Subtitle, Text, CodeInput } from '@resystem/design-system';

import { phoneMask, removePhoneMask } from '../../utils/inputValidations';
import {
  sendPhoneValidation,
  sendPhoneValidationCode,
} from '../../controllers/user.registry.controller';

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
  phone: InputState;
  goToStep: (newStep: number) => void;
  nextStep: () => void;
}

const inputTextValidation = (props: InputState): boolean => {
  return props.error.length > 0 || !(props.value.length < 15);
};

const MessageTitle = (sentTime: number): JSX.Element => {
  if (sentTime < 1) {
    return <Subtitle type="h3">SMS enviado!</Subtitle>;
  }
  return (
    <Subtitle type="h3" className="text-success">
      SMS reenviado!
    </Subtitle>
  );
};

const MessageSubtitle = (sentTime: number, phone: string): JSX.Element => {
  if (sentTime < 2) {
    return (
      <>
        <Paragraph className="text-left">
          Insira o código enviado para
        </Paragraph>
        <Paragraph className="text-left">{phone}</Paragraph>
      </>
    );
  }
  return (
    <>
      <Paragraph className="text-left">Seu nº é {phone} ?</Paragraph>
      <Paragraph className="text-left">Se não for, volte p/ corrigir</Paragraph>
    </>
  );
};

const SendSmsCodeValidation: React.FC<Props> = ({
  ida,
  phone,
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
      sendPhoneValidationCode(ida, newCode).then((r) => {
        console.log('response ', r);
        if (r.data) {
          console.log('data ', r.data);
          setCode(() => ({ value: newCode, error: '' }));
          nextStep();
        } else if (r.error) {
          console.log('set code error ', r.error);
          const errorCode = r.error?.code || '';
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

  const handleSendCodeToPhone = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    sendPhoneValidation(ida, `+55${removePhoneMask(phone.value)}`).then((r) => {
      if (r.data) {
        console.log('data ', r.data);
        setSentTime((prev) => prev + 1);
      } else if (r.error) {
        const error = r.error.phone;
        setCode((prev: InputState) => ({ ...prev, error }));
      }
    });
  };

  return (
    <Wrapper>
      <Header>
        {/* <IconButton icon="arrow_back_ios" /> */}
        <div onClick={() => goToStep(2)}>
          <Text>Voltar</Text>
        </div>
      </Header>
      <Animation>
        <Content>
          <SpaceXXS />
          {MessageTitle(sentTime)}
          <SpaceXXS />
          {MessageSubtitle(sentTime, phone.value)}
          <Space />
          <CodeInput
            onChange={handleValidateCode}
            codeSize={codeSize}
            error={code.error}
          />
          <Paragraph className="text-right">
            Não recebeu ?
            <LindDecoration href="#" onClick={handleSendCodeToPhone}>
              Reenviar código
            </LindDecoration>
          </Paragraph>
        </Content>
      </Animation>
    </Wrapper>
  );
};

SendSmsCodeValidation.propTypes = {
  ida: PropTypes.string.isRequired,
  phone: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
  goToStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default SendSmsCodeValidation;
