<<<<<<< HEAD
import { Header } from './components/common/Header';
import { Navbar } from './components/common/Navbar';

import { ThemeProvider } from 'styled-components';
import AppRouter from './routes/AppRouter';
import colors from './const/colors';
import StyledGlobal from './globalStyles';
=======
import { Header } from "./components/common/Header";
import AppRouter from "./routes/AppRouter";
import { ThemeProvider } from "styled-components";
import colors from "./const/colors";
import { AuthContext } from "./auth/authContext";
import { useReducer } from "react";
import { authReducer } from "./auth/authReducer";
import { userInit } from "./const/userInit";
>>>>>>> 4917687d0c62c9c94caee6f3575cbbe38780d022

const theme = {
  colors,
};

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, userInit);

  return (
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <AppRouter />
      <StyledGlobal />
      <Header />
      <Navbar />
=======
      <AuthContext.Provider
        value={{
          hola: "mundo",
          name: "Jorge quintero",
        }}
      >
        <Header />
        <AppRouter />
      </AuthContext.Provider>
>>>>>>> 4917687d0c62c9c94caee6f3575cbbe38780d022
    </ThemeProvider>
  );
}

export default App;
