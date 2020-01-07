import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    width: 100vw;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: ${props => props.theme.bg};
    color: ${props => props.theme.fontColor};
`;

const Heading = styled.h1`
    font-size: 40px;
    letter-spacing: 1px;
`;

const ProjectMain = styled.div`
    position: relative;
    background: #235bc1;
    width: 65%;
    margin: 0;
    padding: 50px;
    &::before {
        content: "";
        background-color: #ffffff;
        position: absolute;
        width: 2px;
        height: 96%;
        left: 5%;
    }
    @media (max-width: 768px) {
        width: 70%;
        &::before {
            left: 2%;
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProjectContent = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.bg};
    margin: 20px;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0 6px 6px #00318a;
    &::before {
        position: relative;
        content: "\\1F3C1";
        left: -70%;
        top: 90px;
        width: 35px;
        font-size: 30px;
    }
    @media (max-width: 1000px) {
        &::before {
            left: -72%;
        }
    }
    @media (max-width: 768px) {
        width: 55vw;
        &::before {
            left: -72%;
            font-size: 25px;
        }
    }
    @media (max-width: 450px) {
        &::before {
            left: -78%;
        }
        height: 25vh;
    }
`;

const RedirectDiv = styled.div`
    margin: 0;
    padding: 0;
`;

const Span = styled.span`
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    @media (max-width: 768px) {
        font-size: 14px;
        font-weight: bold;
    }
`;

const Anchor = styled.a`
    cursor: pointer;
    margin-left: 10px;
`;

const Icon = styled.i`
    font-size: 20px;
    padding: 0;
    margin: 0;
    color: ${props => props.theme.fontColor};
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const Description = styled.div`
    overflow-y: scroll;
    display: block;
    margin: 0 0 10px 0;
    &::-webkit-scrollbar{
        display: none;
    }
`;

const Text = styled.p`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
`;

const Projects = (props) => {

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
        <Container>
            <Heading>Some awesome work of mine</Heading>
            <ProjectMain>
                <Wrapper>
                    {data.map((data, index) => (
                        <ProjectContent key={index}>
                            <RedirectDiv>
                                <Span>{data.name}</Span>
                                <Anchor>
                                    <Icon className="fas fa-external-link-alt"></Icon>
                                </Anchor>
                            </RedirectDiv>
                            <Description>
                                <Text>{data.description}</Text>
                            </Description>
                            <div><Span>{data.date}</Span></div>
                        </ProjectContent>
                    ))}
                </Wrapper>
            </ProjectMain>
        </Container>
    )
}

export default Projects;