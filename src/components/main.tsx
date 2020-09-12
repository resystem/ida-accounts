import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@resystem/design-system';
import '../css/reset.css';
import GlobalStyles from '../css/GlobalStyles';

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

/**
 * Component that containts default styles for all pages
 * @param {ReactNode} children component that to will be render inside to Layout
 */
const Layout: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <MainContent>
      <Wrapper>{children}</Wrapper>
    </MainContent>
  </ThemeProvider>
);

export default Layout;
