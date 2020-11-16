import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Animation,
  SmallText,
  Subtitle,
  Button,
  Text,
  IconButton,
} from '@resystem/design-system';

import {
  Content,
  Footer,
  Header,
  Space,
  SpaceXXS,
  Wrapper,
  IconWrapper,
  IconContainer,
  Paragraph,
} from './styles';

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
      <Animation>
        <Content>
          <SpaceXXS />
          <Subtitle type="h3">
            Agora precisamos confirmar sua identidade
          </Subtitle>
          <Space />
          <Paragraph>Confirmar via</Paragraph>
          <SpaceXXS />
          {/* <IconButton icon="settings_cell">SMS</IconButton>
        <IconButton icon="local_post_office">E-mail</IconButton> */}
          <IconContainer>
            <IconWrapper disabled onClick={() => '' /* goToStep(3) */}>SMS</IconWrapper>
            <IconWrapper onClick={() => goToStep(5)}>E-mail</IconWrapper>
          </IconContainer>
          <Space />
        </Content>
      </Animation>
    </Wrapper>
  );
};

ChooseConfirmationMethod.propTypes = {
  goToStep: PropTypes.func.isRequired,
};

export default ChooseConfirmationMethod;
