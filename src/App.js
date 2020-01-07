import React, {useState} from 'react';
import { Router } from '@reach/router';
import {ThemeProvider} from 'emotion-theming';
import { Helmet } from 'react-helmet';
import NavBar from './components/NavBar';
import Home from "./components/HomePage";
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Projects from './components/Projects';

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
          <Helmet>
            <meta charSet="utf-8" />
            <title>UddeshJain</title>
            <meta name="description" content="Uddesh's portfolio website." />
            <link rel="canonical" href="https://uddesh.me" />
          </Helmet>
          <NavBar {...{open, NavBarClickHandler, isDark, ThemeHandler}} />
          <Router>
            <Home path="/" />
            <Blogs path="/blogs" />
            <Skills path="/skills" />
            <Projects path="projects" />
          </Router>
        </div>
      </ThemeProvider>
    );
}

export default App;