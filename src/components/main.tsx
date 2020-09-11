import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@resystem/design-system';
import '../css/reset.css';

interface ContentProps {
  theme: {
    brandColor: {
      secondary: {
        darkest: String, 
      },
    },
    spacingSquish: {
      md: String,
    },
  },
}

const MainContent = styled.main`
  ${({ theme }: ContentProps) => `
    position: relative;
    background-color: ${theme.brandColor.secondary.darkest};
    padding: ${theme.spacingSquish.md};
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
  `}
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  z-index: 2;
`;

interface Props {
  children: ReactNode
}

interface ListenerParams {
  source: any
}

/**
 * Component that containts default styles for all pages
 * @param {ReactNode} children component that to will be render inside to Layout
 */
const Layout = ({ children }: Props) => (
  <ThemeProvider theme={defaultTheme}>
    <MainContent>
      <Wrapper>
        {children}
      </Wrapper>
    </MainContent>
  </ThemeProvider>
);

export default Layout;
