import React, { useState, useEffect, useContext } from 'react';
import { navigate } from "gatsby";
import styled from 'styled-components';
import { ButtonText, SmallText, Subtitle } from '@resystem/design-system';
import SEO from '../components/seo';
import Brand from '../components/brand/brand';
import UserCard from '../components/user-card/user-card';
import Loading from '../components/loading/loading';
import { basicSignin } from '../controllers/user.controller';
import { AppContext } from '../store';


const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxs};
`;

interface ThemeInterface {
  theme: {
    spacingStack: {
      xxs: string;
    };
  };
}

const DescriptionWrapper = styled.div`
  ${({ theme }: ThemeInterface) => `
    margin-bottom: ${theme.spacingStack.xxs};
  `}
`;

const UserList = styled.ul`
  margin-top: ${({ theme }) => theme.spacingStack.xs};
  margin-bottom: ${({ theme }) => theme.spacingStack.xs};
`;

interface User {
  id: string;
  username: string;
  token: string;
  avatarURI?: string | null;
}

interface LocalUser {
  ida: string;
  user: {
    username: string;
  };
  token: string;
}

type OnClickCallback = (token: string, id: string, username: string) => void;

const renderCards = (users: User[], onClick: OnClickCallback) =>
  users.map(({ username, avatarURI, id, token }) => (
    <UserCard
      key={id}
      id={id}
      token={token}
      onClick={onClick}
      username={username}
      avatarURI={avatarURI}
    />
  ));

/**
 * Component that containts index page
 */
const IndexPage = () => {
  const { appName, appSource, clientId, socket } = useContext(AppContext);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  console.log('IndexPage -> users', users);

  useEffect(() => {
    const localUsers = window.localStorage.getItem('ida@users') || '{}';
    const parsedLocalUsers = JSON.parse(localUsers).users || [];
    console.log('IndexPage -> parsedLocalUsers', parsedLocalUsers);

    if (parsedLocalUsers.length < 1) {
      navigate('/signin');
      return;
    }

    setUsers(
      parsedLocalUsers.map(({ ida, token, user }: LocalUser) => ({
        id: ida,
        token,
        username: user.username,
        avatarURI: null,
      }))
    );
  }, []);

  const handleClick = (token: string, id: string, username: string): void => {
    basicSignin({ username, token, ida: id, appSource, clientId, socket });
  };

  return (
    <>
      <SEO title="Authentication" />
      <Header>
        <Brand />
      </Header>
      <DescriptionWrapper>
        <SmallText>{`Entre no ${appName} através IDa!`}</SmallText>
      </DescriptionWrapper>
      <Subtitle type="h3">Escolha uma conta para continuar</Subtitle>
      <UserList>{renderCards(users, handleClick)}</UserList>
      <ButtonText
        white
        small
        onClick={() => {
          navigate('/signin/auth/');
        }}
      >
        Entrar com outra conta
      </ButtonText>
      <ButtonText
        white
        small
        customStyle="display: block; margin-top: 10px;"
        onClick={() => {
          navigate('/signup');
        }}
      >
        Não é cadastrado? Cadastre-se
      </ButtonText>
      <Loading idOpened={true} />
    </>
  );
};

export default IndexPage;
