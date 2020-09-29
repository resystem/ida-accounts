import styled from 'styled-components';
import ErrorIcon from '@material-ui/icons/Error';

export const Space = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xs};
`;

export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconError = styled(ErrorIcon)`
  color: ${({ theme }) => theme.alarmColor.warning.medium};
`;
