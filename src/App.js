import { Header } from './components/common/Header';
import { ThemeProvider } from 'styled-components';
import colors from './const/colors';

const theme = {
  colors,
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
