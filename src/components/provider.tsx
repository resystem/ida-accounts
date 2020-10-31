import React, { ReactNode, useState, useEffect } from 'react';
import { AppContext } from '../store';
import Main from './main';

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

interface Props {
  children?: ReactNode
  element?: ReactNode
}

interface ListenerParams {
  source: any
}

/**
 * Component that containts default styles for all pages
 * @param {ReactNode} children component that to will be render inside to Layout
 */
export const Provider = ({ children }: Props) => {
  const [appSource, setAppSource] = useState<any>(null);
  const [appName, setAppName] = useState('');
  const [credentials, setCrendentials] = useState<any>(null);

  return (
    <AppContext.Provider value={{
      credentials, setCrendentials, appSource, appName,
      setAppSource, setAppName,
    }}>
      <Main>
        {children}
      </Main>
    </AppContext.Provider>
  );
};

export default ({ element }: Props) => (
  <Provider>
    {element}
  </Provider>
);;
