import React from "react";
import Container from "./styles/Container";
import TextContainer from "./styles/TextContainer";
import ImageContainer from "./styles/ImageContainer";
import HeroImage from "../../assets/profile.png"
import GreetingDiv from "./styles/Greeting";
import SocialList from "./styles/SocialList";
import ContactList from "./styles/ContactList";

const Home = () => {
    return (
        <Container>
            <TextContainer>
                <div>
                    <GreetingDiv>
                        <p>Hello I'm</p>
                    </GreetingDiv>
                    <h1>Uddesh Jain</h1>
                    <h4>Full Stack Developer</h4>
                    <ContactList>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:">jainuddesh35@gmail.com</a>
                        </li>
                        <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Gwalior, MP, India</p>
                        </li>
                    </ContactList>
                    <SocialList>
                        <li>
                            <a href="https://gitlab.com/UddeshJain" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-gitlab" alt="Gitlab" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/UddeshJain" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github" alt="Github" />
                            </a>
                        </li>
                        <li>
                            <a href="https://dev.to/uddeshjain" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-dev" alt="Dev Community" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/uddeshjain/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/users/8971995/uddesh-jain" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-stack-overflow" alt="stackoverflow" />
                            </a>
                        </li>
                    </SocialList>
                </div>
            </TextContainer>
            <ImageContainer>
                <div>
                    <img src={HeroImage} alt="Hero" />
                </div>
            </ImageContainer>
        </Container>
    )
}

export default Home;