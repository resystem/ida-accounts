import React, { useState, useEffect } from 'react';
import { navigate } from "@reach/router"  
import styled from 'styled-components';
import { ButtonText, SmallText, Subtitle } from '@resystem/design-system';
import Main from '../components/main';
import SEO from '../components/seo';
import Brand from '../components/brand/brand';
import UserCard from '../components/user-card/user-card';
import { basicSignin } from '../controllers/user.controller';

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxs};
`;

interface ThemeInterface {
  theme: {
    spacingStack: {
      xxs: String,
    },
  },
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

const renderCards = (users: User[], onClick: OnClickCallback) => users.map(({
  username, avatarURI, id, token,
}) => (
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
  const [appName, setAppName] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const localUsers = window.localStorage.getItem('ida@users') || '{}';
    const parsedLocalUsers = JSON.parse(localUsers).users || [];
    setAppName('SOM');

    if (parsedLocalUsers.length < 1) {
      navigate('/signin/auth');
      return;
    }

    setUsers(parsedLocalUsers.map(({ ida, token, user }: LocalUser) => ({
      id: ida,
      token,
      username: user.username,
      avatarURI: null,
    })));
  }, []);

  useEffect(() => {
  }, [appName]);

  const handleClick = (token: string, id: string, username: string) : void => {
    basicSignin({ username, token, ida: id, appSource: null });
  };
  
  return (
    <Main>
      <SEO title="Authentication" />
      <Header>
        <Brand />
      </Header>
      <DescriptionWrapper>
        <SmallText>{`Entre no ${appName} através IDa!`}</SmallText>
      </DescriptionWrapper>
      <Subtitle type="h3">Escolha uma conta para continuar</Subtitle>
      <UserList>
        {renderCards(users, handleClick)}
      </UserList>
      <ButtonText
        white
        small
        onClick={() => { navigate('/signin/auth'); }}
      >
        Entrar com outra conta
      </ButtonText>
    </Main>
  );
};

export default IndexPage;
