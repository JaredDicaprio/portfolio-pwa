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

const Heading = styled.h1``;

const ProjectMain = styled.div`
    background: #235bc1;
    width: 70%;
    @media (max-width: 768px) {
        width: 95%;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 0px;
    height: 2700px;
    &::before {
        content: "";
        background-color: black;
        position: absolute;
        width: 2px;
        height: 100%;
        left: 4%;
    }
`;

const ProjectContent = styled.div`
    width: 60%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.bg};
    margin: 20px;
    padding: 20px 60px;
    border-radius: 10px;
    box-shadow: 0 6px 6px #00318a;
    &::before {
        position: absolute;
        content: "\\1F3C1";
        left: -8%;
        top: 90px;
        width: 35px;
        height: 100%;
        font-size: 30px;
    }
    @media (max-width: 768px) {
        height: 22vh;
        width: 50vw;
        &::before {
            /* left: -10%; */
            font-size: 25px;
        }
    }
`;

const RedirectDiv = styled.div``;

const Span = styled.span`
    font-size: 18px;
    font-weight: 500;
    margin: 10px;
    font-weight: bold;
    @media (max-width: 768px) {
        font-size: 14px;
        font-weight: bold;
    }
`;

const Anchor = styled.a`
    cursor: pointer;
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
    margin: 10px;
    &::-webkit-scrollbar{
        display: none;
    }
`;

const Text = styled.p`
    font-size: 16px;
`;

const Projects = (props) => {

    const data = [
        {
          name: "My Portfolio Version 2",
          description: "This is the 2nd version of my portfolio website. It is built with React",
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