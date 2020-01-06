import React, {useState} from 'react';
import { Router } from '@reach/router';
import {ThemeProvider} from 'emotion-theming';
import './App.css';
import NavBar from './components/NavBar';
import Home from "./components/HomePage";
import Skills from './components/Skills';

const LightTheme = {
    bg: "#ffffff",
    fontColor: "black"
}

const DarkTheme = {
    bg: "#000000",
    fontColor: "#ffffff"
}

const App = () => {
    const [open, setOpen] = useState(false);
    const [isDark, setDark] = useState(false)
    const NavBarClickHandler = (event) => {
      event.preventDefault()
      setOpen(!open)
    }
    const ThemeHandler = (event) => {
      event.preventDefault()
      setDark(!isDark)
    }
    return (
      <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
        <div className="App">
          <NavBar {...{open, NavBarClickHandler, isDark, ThemeHandler}} />
          <Router>
            <Home path="/" />
            <Skills path="/skills" />
          </Router>
        </div>
      </ThemeProvider>
    );
}

export default App;