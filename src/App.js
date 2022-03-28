import { Header } from './components/common/Header';
import AppRouter from './routes/AppRouter';
import { ThemeProvider } from 'styled-components';
import colors from './const/colors';
import { AuthContext } from './auth/authContext';
import { useReducer } from 'react';
import { authReducer } from './auth/authReducer';
import { userInit } from './const/userInit';
import StyledGlobal from './globalStyles';
import { Navbar } from './components/common/Navbar';

const theme = {
  colors,
};

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, userInit);

  return (
    <ThemeProvider theme={theme}>
      <StyledGlobal />
      <AuthContext.Provider
        value={{
          user,
          dispatch,
        }}
      >
        <Header />
        <Navbar />
        <AppRouter />
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
