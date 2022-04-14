import { ThemeProvider } from "styled-components";
import AppRouter from "./routes/AppRouter";
import StyledGlobal from "./globalStyles";
import { colors, breakpoints, gradient } from "./const";
import { useEffect, useReducer } from "react";
import { userInit } from "./const/userInit";
import { AuthContext } from "./context/auth/authContext";
import { authReducer } from "./context/auth/authReducer";

const theme = {
  colors,
  gradient,
  breakpoints,
};

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, userInit);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <ThemeProvider theme={theme}>
      <StyledGlobal />
      <AuthContext.Provider
        value={{
          user,
          dispatch,
        }}
      >
        <AppRouter />
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
