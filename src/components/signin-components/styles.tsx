import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Content = styled.div`
  padding-top: ${({ theme }) => theme.spacingStack.xs};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  button {
    width: 100%;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Header = styled.header`
  height: 100%;
  width: 100%;
`;

export const IconWrapper = styled.div`
  display: flex;
  color: #fff;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 12px;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  height: 96px;
  display: flex;
  justify-content: space-between;
`;

export const LindDecoration = styled.a`
  :link,
  :visited,
  :hover,
  :active {
    text-decoration: underline;
    color: ${({ theme }) => theme.brandColor.secondary.medium};
  }
`;

export const Paragraph = styled.p`
  width: 100%;
  color: #fff;
  font-size: 16px;
  line-height: 18px;
`;

export const Space = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xs};
`;

export const SpaceXXS = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;

export const SpaceXXXS = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px auto 70px;
  grid-auto-rows: min-content;
  min-height: 100%;
`;
