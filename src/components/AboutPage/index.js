import React from "react";
import Container from "./style/Container";
import ImageContainer from "./style/ImageContainer";
import TextContainer from "./style/TextContainer";
import AbImage from "../../assets/ab-img.png";

const AboutPage = () => {
    return (
        <Container>
            <ImageContainer>
                <img src={AbImage} alt="About Page" />
            </ImageContainer>
            <TextContainer>
                <div>
                    <h1>About Me</h1>
                    <p>
                        Hello I'm Uddesh Jain, A full stack developer. I have
                        serious passion for creating fully functional web
                        applications with intuitive user interface. Currently
                        I'm working on cool stuff like Progressive Web App
                        (PWA), Service Workers, Push Notification etc.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1YRckH5hyiHMNkMJu05Pk79RC7jVtvCHV/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume <i className="fa fa-download"></i>
                    </a>
                </div>
            </TextContainer>
        </Container>
    );
};

export default AboutPage;
