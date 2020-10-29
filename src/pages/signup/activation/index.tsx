import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import queryString from 'query-string';

import { Subtitle, Button, Text } from '@resystem/design-system';
import Main from '../../../components/main';
import SEO from '../../../components/seo';
import Brand from '../../../components/brand/brand';

import { Content, Header, Wrapper, Space } from '../../../components/signin-components/styles';

import { sendEmailValidationToken } from '../../../controllers/user.registry.controller';

const ButtonWrapper = styled.div`
  width: 100%;

  & button {
    width: 100%;
  }
`;

interface ParsedQuery<T = string> {
  [key: string]: T | T[] | null;
}

interface ISuccessValidation {
  appName: string;
}

interface IFailValidation {
  appName: string;
  errorMessage: string;
}

const SuccessValidation = ({ appName }: ISuccessValidation) => {
  return (
    <>
      <Subtitle type="h3">Seu cadastro foi confirmado</Subtitle>
      <Space />
      <Text>
        Você pode entrar no portal da IDa a qualquer momento para conhecer
        outras iniciativas
      </Text>
      <Space />
      <ButtonWrapper>
        <Button disabled={false} onClick={() => {}}>
          Continuar para {`${appName}`}
        </Button>
      </ButtonWrapper>
    </>
  );
};

const FailValidation = ({ appName, errorMessage }: IFailValidation) => {
  return (
    <>
      <Subtitle type="h3">Seu cadastro não foi confirmado</Subtitle>
      <Space />
      <Text>
        Você pode entrar no portal da IDa a qualquer momento para conhecer
        outras iniciativas
      </Text>
      <Space />
      <Text>{errorMessage}</Text>
      <Space />
      <ButtonWrapper>
        <Button disabled={false} onClick={() => {}}>
          Continuar para {`${appName}`}
        </Button>
      </ButtonWrapper>
    </>
  );
};

const Activation: React.FC = () => {
  const [appName, setAppName] = useState<string>('');
  const location = useLocation();
  const [wasValidated, setWasValidated] = useState<boolean>(false);
  const [validationMessage, setValidationMessage] = useState<string>('');

  function getToken(query: any): string {
    const newToken: ParsedQuery = queryString.parse(query);
    return newToken.token ? `${newToken.token}` : '';
  }

  function getIda(query: any): string {
    const newToken: ParsedQuery = queryString.parse(query);
    return newToken.ida ? `${newToken.ida}` : '';
  }

  useEffect(() => {
    setAppName('SOM');
    const token = getToken(location.search);
    const ida = getIda(location.search);

    console.log('ida token', ida, token);

    sendEmailValidationToken(ida, token).then((response) => {
      console.log('sendEmailValidationToken ', response);

      if (response.data) {
        setWasValidated(true);
      } else if (response.error) {
        setValidationMessage(response.error.error);
      }
    });
  }, [location]);

  return (
    <Main>
      <SEO title="Activation" />
      <Wrapper>
        <Header>
          <Brand />
        </Header>
        <Content>
          <Space />
          {wasValidated && <SuccessValidation appName={appName} />}
          {!wasValidated && (
            <FailValidation
              appName={appName}
              errorMessage={validationMessage}
            />
          )}
        </Content>
      </Wrapper>
      );
    </Main>
  );
};

export default Activation;
