import styled from 'styled-components';

/**
 * Component that containts default styles for all pages
 * @param {ReactNode} children component that to will be render inside to Layout
 */
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 44px 1fr;
  align-items: center;
  grid-gap: 16px;
  cursor: pointer;

  & + & {
    margin-top: 16px;
  }
`;
