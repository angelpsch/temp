import React from 'react';
import './App.scss';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import BottomNav from "./components/BottomNav/";

function App() {
  return (
    <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
      <BottomNav />
    </MuiThemeProvider>
  </BrowserRouter>
  );
}

export default App;
