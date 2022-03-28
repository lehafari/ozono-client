import { Header } from './components/common/Header';
import { Navbar } from './components/common/Navbar';

import { ThemeProvider } from 'styled-components';
import AppRouter from './routes/AppRouter';
import colors from './const/colors';
import StyledGlobal from './globalStyles';

const theme = {
  colors,
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledGlobal />
      <Header />
      <Navbar />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
