interface UserLocalStorage {
  ida: string;
  token: string;
}

interface UserParams extends UserLocalStorage {
  user: string;
}

function saveUserOnLocalStorage({ ida, token, user }: UserParams): void {
  window.localStorage.setItem('ida@id', ida);
  window.localStorage.setItem('ida@token', token);

  const localUsers = window.localStorage.getItem('ida@users') || '{}';
  const parsedLocalUsers = JSON.parse(localUsers).users || [];
  const index = parsedLocalUsers.findIndex(
    (userFounded: UserLocalStorage) => userFounded.ida === ida
  );
  const data = { ida, token, user };

  if (index !== -1) {
    parsedLocalUsers.splice(index, 1, data);
  } else {
    parsedLocalUsers.push(data);
  }

  window.localStorage.setItem(
    'ida@users',
    JSON.stringify({ users: parsedLocalUsers })
  );
}

export { saveUserOnLocalStorage };

export default null;
