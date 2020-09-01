import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SmallText, Subtitle } from '@resystem/design-system';
import Main from '../components/main';
import SEO from '../components/seo';
import Brand from '../components/brand/brand';

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacingStack.xs};
`;

interface ThemeInterface {
  theme: {
    spacingStack: {
      xxs: String,
    },
  },
}

const DescriptionWrapper = styled.div`
  ${({ theme }: ThemeInterface) => `
    margin-bottom: ${theme.spacingStack.xxs};
  `}
`;

/**
 * Component that containts index page
 */
const IndexPage = () => {
  const [appName, setAppName] = useState('');
  
  useEffect(() => {
    setAppName('SOM');
  }, []);
  
  return (
    <Main>
      <SEO title="Home" />
      <Header>
        <Brand />
      </Header>
      <DescriptionWrapper>
        <SmallText>{`Entre no ${appName} através IDa!`}</SmallText>
      </DescriptionWrapper>
      <Subtitle>Escolha uma conta para continuar</Subtitle>
      
    </Main>
  );
};

export default IndexPage;
