import React, {useState, lazy, Suspense, useCallback} from 'react';
import { Router } from '@reach/router';
import {ThemeProvider} from 'emotion-theming';
import { Helmet } from 'react-helmet';
import Spinner from "./Containers/Spinner/index";
import NavBar from './Containers/NavBar/index';

const Home = lazy(() =>
  import("./Containers/LandingPage/index")
);

const Blogs = lazy(() =>
  import("./Containers/BlogPage/index")
);

const Skills = lazy(() =>
  import("./Containers/SkillsPage/index")
);

const Projects = lazy(() =>
  import("./Containers/ProjectsPage/index")
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

const AppRoutes = () => {
    const [open, setOpen] = useState(false);
    const [isDark, setDark] = useState(false)

    const NavBarClickHandler = useCallback((event) => {
      event.preventDefault()
      setOpen(!open)
    }, [open])

    const ThemeHandler = useCallback((event) => {
      event.preventDefault()
      setDark(!isDark)
    }, [isDark])
    
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

export default AppRoutes;