import React, { ReactNode, useEffect, useContext, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { createHistory } from '@reach/router';
import queryString from 'query-string';
import { defaultTheme } from '@resystem/design-system';
import { verify } from '../controllers/app.controller';
import { AppContext } from '../store';
import GlobalStyles from '../css/GlobalStyles';
import Skeleton from './skeleton';
import '../css/reset.css';
import '../css/main.css';
// import '@resystem/design-system/dist/main.css';

const history = createHistory(window);

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
  const [loading, setLoading] = useState<boolean>(false);
  const { setAppName, setAppSource } = useContext(AppContext);

  useEffect(() => {
    const { appKey, appId } = queryString.parse(history.location.search);
    verify({
      setAppName,
      setLoading,
      appKey,
      appId,
    });

    window.addEventListener(
      'message',
      ({ source }: ListenerParams) => {
        setAppSource(source);
      },
      false
    );
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
