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

import { phoneMask, removePhoneMask } from '../../utils/inputValidations';
import { sendPhoneValidation } from '../../controllers/user.registry.controller';

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
  ida: string;
  goToStep: (newStep: number) => void;
  nextStep: () => void;
  setPhone: (value: any) => void;
  phone: InputState;
}

interface InputState {
  value: string;
  error: string;
}

const inputTextValidation = (props: InputState): boolean => {
  return props.error.length > 0 || !(props.value.length < 15);
};

const SMSConfirmation: React.FC<Props> = ({
  ida,
  goToStep,
  nextStep,
  phone,
  setPhone,
}) => {
  const [buttonEnable, setButtonEnable] = useState(true);

  const handlephoneChange = (value: string) => {
    const error = '';
    setPhone((prev: InputState) => ({
      ...prev,
      value: phoneMask(value),
      error,
    }));
  };

  const handleButtonClick = () => {
    sendPhoneValidation(ida, `+55${removePhoneMask(phone.value)}`).then((r) => {
      if (r.data) {
        console.log('data ', r.data);
        setPhone((prev: InputState) => ({ ...prev, error: '' }));
        nextStep();
      } else if (r.error) {
        const error = r.error.phone;
        setPhone((prev: InputState) => ({ ...prev, error }));
      }
    });
  };

  useEffect(() => {
    console.log('ida ', ida);
    setButtonEnable(!inputTextValidation(phone));
  }, [ida, phone]);

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
        <Subtitle type="h3">Insira o seu celular para receber o SMS</Subtitle>
        <Space />
        <TextInput
          id="celular"
          label="Celular"
          value={phone.value}
          error={phone.error}
          onChange={(newValue: string) => handlephoneChange(newValue)}
        />
      </Content>
      <Footer>
        <div>
          <Button disabled={buttonEnable} onClick={handleButtonClick}>
            Enviar SMS
          </Button>
        </div>
      </Footer>
    </Wrapper>
  );
};

SMSConfirmation.propTypes = {
  ida: PropTypes.string.isRequired,
  goToStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  phone: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
  setPhone: PropTypes.func.isRequired,
};

export default SMSConfirmation;
