import styled from 'styled-components';

export const AvatarComponent = styled.img`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius.circular};
  object-fix: cover;
  user-select: none;
`;

export const InitialUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius.circular};
  background-color: ${({ theme }) => theme.neutralColor[1]};
  font-style: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.brandColor.primary.darkest};
`;

