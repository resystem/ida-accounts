import styled, { keyframes } from 'styled-components';

const rotateKeyframes = keyframes`
    from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    } to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingComponent = styled.img`
  animation: ${rotateKeyframes} 1s linear infinite;
  -webkit-animation: ${rotateKeyframes} 1s linear infinite;
`;
