import React, { ReactNode, useState, useEffect } from 'react';
import { AppContext } from '../store';

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
const Provider = ({ children }: Props) => {
  const [appSource, setAppSource] = useState<any>(null);
  const [appName, setAppName] = useState('');

  return (
    <AppContext.Provider value={{ appSource, appName, setAppSource, setAppName }}>
      {children}
    </AppContext.Provider>
  );
};

export default ({ element }: Props) => (
  <Provider>
    {element}
  </Provider>
);;