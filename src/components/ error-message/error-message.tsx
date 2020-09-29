import React from 'react';
import { Subtitle, Text, Button } from '@resystem/design-system';
import Space from './error-message.style';

const ErrorMessage = ({ onClick }) => {
  return (
    <>
      <Subtitle type="h2" className="text-warning">
        Desculpe, algo deu errado
      </Subtitle>
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
