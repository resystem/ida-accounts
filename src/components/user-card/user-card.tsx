import React from 'react';
import Avatar from './components/avatar/avatar';
import { Text } from '@resystem/design-system';
import { CardWrapper } from './user-card.style';

interface Props {
  id: string;
  username: string;
  avatarURI?: string | null;
  onClick(id: string): void;
} 

/**
 * Component that containts default styles for all pages
 * @param {object} props components proptypes
 * @param {string} props.id user`s id
 * @param {string} props.username user`s username
 * @param {avatarURI} props.avatarURI user`s avatar link
 */
const Card = ({
  id, username, avatarURI, onClick,
}: Props) => (
  <CardWrapper
    onClick={() => onClick(id)}
  >
    <Avatar
      username={username}
      uri={avatarURI}
    />
    <Text>{username}</Text>
  </CardWrapper>
);

export default Card;
