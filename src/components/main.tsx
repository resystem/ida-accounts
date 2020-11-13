import React, { ReactNode, useEffect, useContext, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { createHistory } from '@reach/router';
import queryString from 'query-string';
import socketClient from 'socket.io-client';
import { defaultTheme } from '@resystem/design-system';
import { verify } from '../controllers/app.controller';
import { AppContext } from '../store';
import GlobalStyles from '../css/GlobalStyles';
import Skeleton from './skeleton';
import '../css/reset.css';
import '../css/main.css';
// import '@resystem/design-system/dist/main.css';

import '@resystem/design-system/dist/main.css';

let history: any = null;
if (typeof window !== 'undefined') {
  history = createHistory(window);
}

interface ContentProps {
  theme: {
    brandColor: {
      secondary: {
        darkest: string;
      };
    };
    spacingSquish: {
      md: string;
    };
  };
}

const initSocketConnection = async ({ setSocket, client_id }: Object) => {
  console.log('client_id', client_id);
  const socket = await socketClient(process.env.GATSBY_SOCKET_API, { transports: ['websocket'] });
  // history
  socket.emit('init', { client_type: 'ida', client_id  })
  socket.on('error-listenner', (payload) => console.log('ERROR - payload: ', payload))
  console.log('history', history.location);
  setSocket(socket);
}

const MainContent = styled.main`
  position: relative;
  background-color: ${({ theme }) => theme.brandColor.secondary.darkest};
  padding: ${({ theme }) => theme.spacingSquish.md};
  height: 100vh;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/static/images/bg.svg');
    background-size: 100% auto;
    background-repeat: no-repeat;
    z-index: 1;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  z-index: 2;
`;

interface Props {
  children: ReactNode;
  location: any;
}

interface ListenerParams {
  source: any;
}

interface QueryInterface {
  appKey: string;
  appId: string;
}

/**
 * Component that containts default styles for all pages
 * @param {ReactNode} children component that to will be render inside to Layout
 */
const Layout: React.FC<Props> = ({ children }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const {
    setAppName,
    setAppSource,
    setCrendentials,
    socket,
    clientId,
    setClientId,
    setSocket,
  } = useContext(AppContext);
  console.log('socket', socket);

  useEffect(() => {
    if (history) {
      const { appKey, appId, client_id  } = queryString.parse(history.location.search);

      verify({
        setAppName,
        setLoading,
        appKey,
        appId,
        setCrendentials,
        clientId: client_id,
        setClientId,
      });
      
      window.addEventListener(
        'message',
        ({ source }: ListenerParams) => {
          setAppSource(source);
        },
        false
      );
      initSocketConnection({ setSocket, client_id });
    }

  }, []);

  if (loading)
    return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <MainContent>
          <Wrapper>
            <Skeleton />
          </Wrapper>
        </MainContent>
      </ThemeProvider>
    );

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <MainContent>
        <Wrapper>{children}</Wrapper>
      </MainContent>
    </ThemeProvider>
  );
};

export default Layout;
