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

import Brand from '../../components/brand/brand';

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

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  appName: string;
  nextStep: () => void;
}

const TermsOfUse: React.FC<Props> = ({ appName, nextStep }) => {
  const handleRedirectLogin = () => window.location.replace('/signin');
  const [checkbox, setCheckbox] = useState<boolean>(false);

  const handleClickCheckbox = (e) => {
    // setCheckbox((prev) => true);
    console.log(e);
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
          <CheckboxInput checked={checkbox} onClick={handleClickCheckbox} />
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
