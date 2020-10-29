import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  ButtonText,
  SmallText,
  Subtitle,
  Button,
  Text,
  CheckboxInput,
} from '@resystem/design-system';
import Brand from '../brand/brand';
import {
  Content,
  CheckboxWrapper,
  Footer,
  Header,
  Space,
  SpaceXXS,
  LindDecoration,
  Wrapper,
} from './styles';

interface Props {
  appName: string;
  nextStep: () => void;
}

const TermsOfUse: React.FC<Props> = ({ appName, nextStep }) => {
  const handleRedirectLogin = () => window.location.replace('/signin');
  const [checkbox, setCheckbox] = useState<boolean>(false);

  const handleClickCheckbox = (e) => {
    setCheckbox((prev) => !prev);
  };

  return (
    <Wrapper>
      <Header>
        <Brand />
      </Header>
      <Content>
        <SmallText>{`Inscreva-se no ${appName} através da IDa!`}</SmallText>
        <SpaceXXS />
        <ButtonText white small onClick={handleRedirectLogin}>
          Já é cadastrado? Faça login
        </ButtonText>
        <Space />
        <Subtitle type="h3">Criando sua IDa</Subtitle>
        <Space />
        <Text>
          A IDa é um serviço de autenticação digital que conecta ativistas ao
          Banco de Tecnologias da Mídia NINJA.
        </Text>
        <SpaceXXS />
        <ButtonText white small>
          Saiba mais sobre a IDa
        </ButtonText>
        <SpaceXXS />
        <CheckboxWrapper>
          <CheckboxInput checked={checkbox} onChange={handleClickCheckbox} />
          <SmallText>
            Li e concordo com os
            <LindDecoration href="#">
              Termos de uso e privacidade da IDA
            </LindDecoration>
          </SmallText>
        </CheckboxWrapper>
      </Content>
      <Footer>
        <div>
          <Button onClick={nextStep}>Proxímo</Button>
        </div>
      </Footer>
    </Wrapper>
  );
};

TermsOfUse.propTypes = {
  appName: PropTypes.string.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default TermsOfUse;
