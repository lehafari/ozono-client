import { createGlobalStyle } from 'styled-components';

const StyledGlobal = () => <GlobalStyle />;

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Helvetica', 'PlantageneCherokee', 'Arial', 'sans-serif';
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 1px;

      &-track {
        background: #f8f8f8;
      }
      
      &-thumb {
        background: #5571B2;
        border-radius: 0.5rem;
            }
    }
  }
`;

export default StyledGlobal;
