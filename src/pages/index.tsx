import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ButtonText, SmallText, Subtitle } from '@resystem/design-system';
import Main from '../components/main';
import SEO from '../components/seo';
import Brand from '../components/brand/brand';
import UserCard from '../components/user-card/user-card';

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacingStack.xs};
`;

const UserList = styled.ul`
  margin-top: ${({ theme }) => theme.spacingStack.xs};
  margin-bottom: ${({ theme }) => theme.spacingStack.xs};
`;

const DescriptionWrapper = styled.div`
  ${({ theme }: ThemeInterface) => `
    margin-bottom: ${theme.spacingStack.xxs};
  `}
`;

interface User {
  id: string;
  username: string;
  avatarURI?: string | null;
}

type OnClickCallback = (id: string) => void;

const renderCards = (users: User[], onClick: OnClickCallback) => users.map(({ username, avatarURI, id }) => (
  <UserCard
    key={id}
    id={id}
    onClick={onClick}
    username={username}
    avatarURI={avatarURI}
  />
));

interface ThemeInterface {
  theme: {
    spacingStack: {
      xxs: String,
    },
  },
}

/**
 * Component that containts index page
 */
const IndexPage = () => {
  const [appName, setAppName] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setAppName('SOM');
    setUsers([
      {
        id: 'test1',
        username: 'teste1',
        avatarURI: 'https://static.quizur.com/i/b/570eca39a7a9c8.16476469manga-naruto.jpg',
      },
      {
        id: 'test2',
        username: 'teste3',
        avatarURI: null,
      },
    ]);
  }, []);

  const handleClick = (id: string) : void => {
    console.log(id);
  };
  
  return (
    <Main>
      <SEO title="Home" />
      <Header>
        <Brand />
      </Header>
      <DescriptionWrapper>
        <SmallText>{`Entre no ${appName} através IDa!`}</SmallText>
      </DescriptionWrapper>
      <Subtitle>Escolha uma conta para continuar</Subtitle>
      <UserList>
        {renderCards(users, handleClick)}
      </UserList>
      <ButtonText white small>Entrar com outra conta</ButtonText>
    </Main>
  );
};

export default IndexPage;
