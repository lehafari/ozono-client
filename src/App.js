import { ThemeProvider } from 'styled-components';
import AppRouter from './routes/AppRouter';
import StyledGlobal from './globalStyles';
import { colors, breakpoints, gradient } from './const';
import { useEffect, useReducer } from 'react';
import { userInit } from './const/userInit';
import { AuthContext } from './context/auth/authContext';
import { authReducer } from './context/auth/authReducer';
import { GetUser } from './helpers/GetUser';
import { Provider } from 'react-redux';
import { store } from './store/store';

const theme = {
  colors,
  gradient,
  breakpoints,
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledGlobal />
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
