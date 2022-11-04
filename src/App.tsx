import React from "react";
import { ThemeProvider } from "styled-components";
import RoutesComponent from "./routes";
import GlobalStyle from "./styles/globalStyle";
import { useContext } from "react";
import { ThemeContext } from "./providers/Theme";
import { darkTheme, lightTheme } from "./styles/theme";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <RoutesComponent />
    </ThemeProvider>
  );
};

export default App;
