import React from 'react';
import { Subtitle, Text, Button } from '@resystem/design-system';
import { Space, TitleContent, IconError } from './error-message.style';

const ErrorMessage = ({ onClick }) => {
  return (
    <>
      <TitleContent>
        <Subtitle type="h2" className="text-warning">
          Desculpe, algo deu errado
        </Subtitle>
        <IconError />
      </TitleContent>
      <Space />
      <Text>
        Não conseguimos carregar a IDa, mas é só apertar no botão abaixo que
        vamos tentar novamente!
      </Text>
      <Space />
      <Button onClick={onClick}>Recuperar acesso </Button>
    </>
  );
};

export default ErrorMessage;
