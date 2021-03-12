import React from 'react';

import { Wrapper, LoadingComponent } from './loading.syle';

interface Props {
  idOpened?: Boolean
}

const Loading = ({ idOpened }: Props) => {
    if (!idOpened) return null;
  return (
    <Wrapper>
      <LoadingComponent src="/icons/white-loading.svg" />
    </Wrapper>
  );
};

export default Loading;
