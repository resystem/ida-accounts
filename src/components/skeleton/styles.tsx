import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

export const Space = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xs};
`;

export const SpaceXXS = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxs};
`;

export const SpaceXXXS = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;
