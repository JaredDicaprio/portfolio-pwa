import React, {useState, lazy, Suspense} from 'react';
import { Router } from '@reach/router';
import {ThemeProvider} from 'emotion-theming';
import { Helmet } from 'react-helmet';
import Spinner from "./components/Spinner";
import NavBar from './components/NavBar';

const Home = lazy(() =>
  import("./components/HomePage")
);

const Blogs = lazy(() =>
  import("./components/Blogs")
);

const Skills = lazy(() =>
  import("./components/Skills")
);

const Projects = lazy(() =>
  import("./components/Projects")
);


const HomePage = () => (
  <Suspense fallback={<Spinner />}>
    <Home />
  </Suspense>
)

const BlogsPage = () => (
  <Suspense fallback={<Spinner />}>
    <Blogs />
  </Suspense>
)

const SkillsPage = () => (
  <Suspense fallback={<Spinner />}>
    <Skills />
  </Suspense>
)

const ProjectsPage = () => (
  <Suspense fallback={<Spinner />}>
    <Projects />
  </Suspense>
)

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
            <HomePage path="/" />
            <BlogsPage path="/blogs" />
            <SkillsPage path="/skills" />
            <ProjectsPage path="projects" />
          </Router>
        </div>
      </ThemeProvider>
    );
}

export default App;