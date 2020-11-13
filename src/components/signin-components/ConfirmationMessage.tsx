import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Animation,
  Subtitle,
  Text,
  Button,
  TextInput,
} from '@resystem/design-system';
import { AppContext } from '../../store';

import Brand from '../brand/brand';

import { emailValidation } from '../../utils/inputValidations';
import {
  ButtonContainer,
  Content,
  LindDecoration,
  Header,
  Paragraph,
  Space,
  SpaceXXS,
  Wrapper,
} from './styles';

import { signin } from '../../controllers/user.controller';

interface Props {
  username: string;
  password: string;
}

const ConfirmationMessage: React.FC<Props> = ({ username, password }) => {
  const { appName, appSource, socket, clientId } = useContext(AppContext);
  function handleClick(): void {
    signin({
      socket,
      clientId,
      username,
      password,
      setErrors: () => {},
      setLoading: () => {},
      appSource,
    });
  }
  return (
    <Wrapper>
      <Header>
        <Brand />
      </Header>
      <Content>
        <SpaceXXS />
        <Animation>
          <Subtitle type="h3">Seu cadastro foi confirmado!</Subtitle>
          <SpaceXXS />
          <Paragraph className="text-left">
            Você pode entrar no{' '}
            <LindDecoration href="#"> portal da IDa </LindDecoration> a qualquer
            momento para conhecer outras iniciativas
          </Paragraph>
          <Space />
          <ButtonContainer>
            <Button onClick={handleClick}>Continuar para a {appName}</Button>
          </ButtonContainer>
        </Animation>
      </Content>
    </Wrapper>
  );
};

ConfirmationMessage.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default ConfirmationMessage;
