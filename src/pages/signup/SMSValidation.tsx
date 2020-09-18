import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  SmallText,
  Subtitle,
  Button,
  Text,
  TextInput,
  CodeInput,
} from '@resystem/design-system';

import { phoneMask, removePhoneMask } from '../../utils/inputValidations';
import {
  sendPhoneValidation,
  sendPhoneValidationCode,
} from '../../controllers/user.registry.controller';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 40px auto 70px;
  grid-auto-rows: min-content;
  min-height: 100%;
`;

const Header = styled.header`
  height: 100%;
  width: 100%;
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

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

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

const SMSValidation: React.FC<Props> = ({ ida, phone, goToStep, nextStep }) => {
  const [sentTime, setSentTime] = useState<number>(0);
  const [code, setCode] = useState<InputState>({
    value: '',
    error: '',
  });
  const codeSize = 6;

  const handleValidateCode = (newCode: string) => {
    if (newCode.length === codeSize) {
      sendPhoneValidationCode(ida, '184890').then((r) => {
        console.log('response ', r);
        if (r.data) {
          console.log('data ', r.data);
          setCode(() => ({ value: newCode, error: '' }));
          // nextStep();
        } else if (r.error) {
          console.log('set code error ', r.error);
          const error = r.error.code;
          setCode((prev: InputState) => ({
            ...prev,
            error: 'Código inválido',
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
    </Wrapper>
  );
};

SMSValidation.propTypes = {
  ida: PropTypes.string.isRequired,
  phone: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
  goToStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default SMSValidation;
