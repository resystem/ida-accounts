import React from 'react';

import { Skeleton } from '@resystem/design-system';
import { FlexContainer, Space, SpaceXXS, SpaceXXXS } from './styles';

const skeletonPage: React.FC = () => {
  return (
    <FlexContainer>
      <Skeleton width="100%" />
      <Skeleton width="75%" />
      <SpaceXXXS />
      <Skeleton width="65%" />
      <SpaceXXXS />
      <Skeleton width="70%" />
      <Skeleton width="100%" />
      <Skeleton width="70%" />
      <Skeleton width="85%" />
      <Space />
      <Skeleton width="95%" />
      <Skeleton width="90%" />
    </FlexContainer>
  );
};

export default skeletonPage;
