import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div></div>
    </ThemeProvider>
  );
};

export default App;
