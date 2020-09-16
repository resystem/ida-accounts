import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  SmallText,
  Subtitle,
  Button,
  Text,
  TextInput,
} from '@resystem/design-system';

import { phoneMask } from '../../utils/inputValidations';

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
  phone: InputState;
  goToStep: (newStep: number) => void;
  nextStep: (newStep: number) => void;
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

const SMSValidation: React.FC<Props> = ({ phone, goToStep, nextStep }) => {
  const [sentTime, setSentTime] = useState<number>(0);

  const handleSendCode = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    setSentTime((prev) => prev + 1);
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
        <Paragraph className="text-right">
          Não recebeu ?
          <LindDecoration href="#" onClick={handleSendCode}>
            Reenviar código
          </LindDecoration>
        </Paragraph>
      </Content>
    </Wrapper>
  );
};

SMSValidation.propTypes = {
  phone: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
  goToStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default SMSValidation;
