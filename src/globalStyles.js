import { createGlobalStyle } from 'styled-components';

const StyledGlobal = () => <GlobalStyle />;

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Helvetica', 'PlantageneCherokee', 'Arial', 'sans-serif';
    overflow-x: hidden;
  }
`;

export default StyledGlobal;
