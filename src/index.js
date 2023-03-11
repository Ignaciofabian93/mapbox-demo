import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider, createTheme } from "@mui/material";

import App from "./App";

const customTheme = createTheme({
  palette: {
    primary: { main: "#2e424d" },
    secondary: { main: "#5b8291" },
    info: { main: "#98dad9" },
    light: { main: "eaebed" },
    black: { main: "#000" },
    white: { main: "#fff" },
  },
  typography: {
    fontFamily: "Lato",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={customTheme}>
    <App />
  </ThemeProvider>
);
