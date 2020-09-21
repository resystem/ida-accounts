import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  .text-success{
    color: ${({ theme }) => theme.alarmColor.success.medium};
  }
  .text-fail{
    color: ${({ theme }) => theme.alarmColor.fail.medium};
  }
  .text-warning{
    color: ${({ theme }) => theme.alarmColor.warning.medium};
  }

  .text-center{
    text-align: center;
  }
  .text-right{
    text-align: right;
  }
  .text-left{
    text-align: left;
  }
`;

export default GlobalStyles;
