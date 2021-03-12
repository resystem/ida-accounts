import React from 'react';

import { Wrapper, LoadingComponent } from './loading.syle';

interface Props {
  idOpened?: Boolean
}

const Loading = ({ idOpened }: Props) => {
    if (!idOpened) return null;
  return (
    <Wrapper>
      <LoadingComponent src="https://storage-ida.s3-us-west-2.amazonaws.com/assets/ida/white-loading.svg" />
    </Wrapper>
  );
};

export default Loading;
