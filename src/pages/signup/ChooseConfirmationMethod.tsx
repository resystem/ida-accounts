import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  ButtonText,
  SmallText,
  Subtitle,
  Button,
  Text,
  IconButton,
} from '@resystem/design-system';

import Brand from '../../components/brand/brand';

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

const IconContainer = styled.div`
  height: 96px;
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  color: #fff;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const Paragraph = styled.p`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 16px;
  line-height: 18px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

interface Props {
  goToStep: (newStep: number) => void;
}

const ChooseConfirmationMethod: React.FC<Props> = ({ goToStep }) => {
  const tete = 1;

  return (
    <Wrapper>
      <Header>
        {/* <IconButton icon="arrow_back_ios" /> */}
        <div onClick={() => goToStep(1)}>
          <Text>Voltar</Text>
        </div>
      </Header>
      <Content>
        <SpaceXXS />
        <Subtitle type="h3">Agora precisamos confirmar sua identidade</Subtitle>
        <Space />
        <Paragraph>Confirmar via</Paragraph>
        <SpaceXXS />
        {/* <IconButton icon="settings_cell">SMS</IconButton>
        <IconButton icon="local_post_office">E-mail</IconButton> */}
        <IconContainer>
          <IconWrapper onClick={() => goToStep(3)}>SMS</IconWrapper>
          <IconWrapper onClick={() => goToStep(6)}>E-mail</IconWrapper>
        </IconContainer>
        <Space />
      </Content>
    </Wrapper>
  );
};

ChooseConfirmationMethod.propTypes = {
  goToStep: PropTypes.func.isRequired,
};

export default ChooseConfirmationMethod;
