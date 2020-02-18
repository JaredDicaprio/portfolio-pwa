import React from "react";
import Projects from "../../components/Projects/index";

const ProjectsContainer = () => {
    const data = [
        {
          name: "My Portfolio Version 2",
          description: "This is the 2nd version of my portfolio website. It is built with React. It's a Progressive Web App (PWA) and could be installed as native app.",
          link: "",
          date: "Nov 2019"
        },
        {
          name: "SINTAX",
          description: "Sintax is a programming language built with JavaScript. It's easy to learn and use.",
          link: "https://github.com/UddeshJain/SINTAX",
          date: "Aug - Oct, 2019"
        },
        {
          name: "ADOPT ME",
          description: "Adopt me is a web app built with reactjs and allows users to adopt a pet.",
          link: "https://github.com/UddeshJain/adopt-me",
          date: "Sept - Oct, 2019"
        },
        {
          name: "MOVIE RENTAL API",
          description: "This API build with NodeJS and uses MongoDB as the database. It allows users to rent a movie. It has authentication and role-based access system.",
          link: "https://github.com/UddeshJain/movie_rental_api",
          date: "Aug - Sept, 2019"
        },
        {
          name: "MY WEBSITE V1",
          description: "This is first version of my portfolio website.",
          link: "https://uddeshjain.me",
          date: "June - July, 2019"
        },
        {
          name: "LINUX SERVER CONFIGURATION",
          description: "A baseline installation of a Linux server and prepare it to host web applications, secure your server from a number of attack vectors, install and configure a database server, and deploy one of your existing web applications onto it.",
          link: "https://github.com/UddeshJain/linux_server_configuration",
          date: "June - July, 2019"
        },
        {
          name: "ITEM CATALOG",
          description: "Item Catalog provides a list of items within a variety of categories as well as provide a user registration and authentication system. Registered users will have the ability to post, edit and delete their own items.",
          link: "https://github.com/UddeshJain/item_catalog",
          date: "May - June, 2019"
        },
        {
          name: "LOG ANALYTICS",
          description: "This is an internal reporting tool for newspaper site to discover what kind of articles the site's readers like and it also shows the error log for a particular date.",
          link: "https://github.com/UddeshJain/log-analytics",
          date: "May - June, 2019"
        },
        {
          name: "REACT WEATHER APP",
          description: "Weather web app is very simple to use, just write the city name in the text field and hit get weather button and it will show the current weather.",
          link: "https://weather-app-8827.firebaseapp.com/",
          date: "Nov - Dec, 2018"
        }
      ]

    return (
        <Projects data={data} />
    )
}

export default ProjectsContainer;