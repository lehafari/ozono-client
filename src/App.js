import { ThemeProvider } from "styled-components";
import AppRouter from "./routes/AppRouter";
import colors from "./const/colors";
import StyledGlobal from "./globalStyles";
import { AuthContext } from "./auth/authContext";
import { useReducer } from "react";
import { authReducer } from "./auth/authReducer";
import { userInit } from "./const/userInit";

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
        <AppRouter />
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
