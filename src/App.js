import { Header } from "./components/common/Header";
import AppRouter from "./routes/AppRouter";
import { ThemeProvider } from "styled-components";
import colors from "./const/colors";
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
      <AuthContext.Provider
        value={{
          hola: "mundo",
          name: "Jorge quintero",
        }}
      >
        <Header />
        <AppRouter />
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
