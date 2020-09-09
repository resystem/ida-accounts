import React from 'react';
import Avatar from './components/avatar/avatar';
import { Text } from '@resystem/design-system';
import { CardWrapper } from './user-card.style';

interface Props {
  id: string;
  token: string;
  username: string;
  avatarURI?: string | null;
  onClick(token: string, id: string, username: string): void;
} 

/**
 * Component that containts default styles for all pages
 * @param {object} props components proptypes
 * @param {string} props.id user id
 * @param {string} props.token user token
 * @param {string} props.username user`s username
 * @param {avatarURI} props.avatarURI user`s avatar link
 */
const Card = ({
  id, token, username, avatarURI, onClick,
}: Props) => (
  <CardWrapper
    onClick={() => onClick(token, id, username)}
  >
    <Avatar
      username={username}
      uri={avatarURI}
    />
    <Text>{username}</Text>
  </CardWrapper>
);

export default Card;
