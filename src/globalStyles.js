import { createGlobalStyle } from 'styled-components';

const StyledGlobal = () => <GlobalStyle />;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica', 'Arial', sans-serif
  }
`;

export default StyledGlobal;
