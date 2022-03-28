import { Header } from "./components/common/Header";
import AppRouter from "./routes/AppRouter";
import { ThemeProvider } from "styled-components";
import colors from "./const/colors";

const theme = {
  colors,
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
