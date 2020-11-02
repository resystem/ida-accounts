import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Animation,
  SmallText,
  Subtitle,
  Button,
  Text,
  TextInput,
} from '@resystem/design-system';
import { AppContext } from '../../store';
import { phoneMask, removePhoneMask } from '../../utils/inputValidations';
import { sendPhoneValidation } from '../../controllers/user.registry.controller';
import { Content, Footer, Header, Space, SpaceXXS, Wrapper } from './styles';

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

const SendSmsCode: React.FC<Props> = ({
  ida,
  goToStep,
  nextStep,
  phone,
  setPhone,
}) => {
  const { setAuth } = useContext(AppContext);
  const [buttonEnable, setButtonEnable] = useState(true);
  const [isLoadingButton, setIsLoadingButton] = useState<boolean>(false);

  const handlephoneChange = (value: string) => {
    const error = '';
    setPhone((prev: InputState) => ({
      ...prev,
      value: phoneMask(value),
      error,
    }));
  };

  const handleButtonClick = () => {
    setIsLoadingButton(true);
    sendPhoneValidation(ida, `+55${removePhoneMask(phone.value)}`)
      .then((r) => {
        if (r.data) {
          setAuth(r.data);
          setPhone((prev: InputState) => ({ ...prev, error: '' }));
          nextStep();
        } else if (r.error) {
          const error = r.error.phone;
          setPhone((prev: InputState) => ({ ...prev, error }));
        }
      })
      .finally(() => setIsLoadingButton(false));
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
      <Animation>
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
      </Animation>
      <Footer>
        <div>
          <Button
            disabled={buttonEnable}
            isLoading={isLoadingButton}
            onClick={handleButtonClick}
          >
            Enviar SMS
          </Button>
        </div>
      </Footer>
    </Wrapper>
  );
};

SendSmsCode.propTypes = {
  ida: PropTypes.string.isRequired,
  goToStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  phone: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
  setPhone: PropTypes.func.isRequired,
};

export default SendSmsCode;
