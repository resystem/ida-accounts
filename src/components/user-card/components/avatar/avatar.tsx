import React from 'react';
import { AvatarComponent, InitialUsername } from './avatar.style';

/**
 * Component that contains avatar compoenent
 * @param {string} uri components proptypes
 * @param {string} username user`s username
 */
const renderAvatar = (uri: string, username: string) => (
  <AvatarComponent
    src={uri}
    alt={`Essa é a imagem de avatar do ${username}`}
  />
);

/**
 * Component that contains avatar compoenent
 * @param {string} username user`s username
 */
const renderUsernameInitial = (username: string) => (
  <InitialUsername>
    {username[0]}
  </InitialUsername>
);

interface Props {
  username: string;
  uri?: string | null;
} 

/**
 * Component that containts default styles for all pages
 * @param {object} props components proptypes
 * @param {string} props.username user`s username
 * @param {uri} props.uri user`s avatar link
 */
const Avatar = ({ username, uri }: Props) => uri
  ? renderAvatar(uri, username)
  : renderUsernameInitial(username);

export default Avatar;
