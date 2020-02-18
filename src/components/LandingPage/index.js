import React from 'react';
import styled from '@emotion/styled';
import Picture from "../../assets/profile.png"

const Container = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 83vh;
    padding-bottom: 60px;
    background: ${props => props.theme.bg};
    color: ${props => props.theme.fontColor};
`

const Intro = styled.div`
    width: 80%;
    padding-bottom: 20px;
`;

const Name = styled.h1`
    font-size: 40px;
    @media (max-width: 370px) {
        font-size: 30px;
        margin: 0;
        padding: 0;
    }
`;

const ProfileContainer = styled.div``;

const ProfileCircle = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 3px solid #235bc1;
    border-radius: 50%;
    width: 130px;
    height: 130px;
    margin: 0 auto;
`;

const ProfilePicture = styled.img`
    border-radius: 50%;
    width: 130px;
    height: 130px;
`;

const JobTitleDiv = styled.div`
    padding-top: 40px;
    font-weight: normal;
    @media (max-width: 370px) {
        padding-top: 10px;
    }
`;

const Text = styled.p`
    font-size: 20px;
    letter-spacing: 1px;
    @media (max-width: 768px) {
        font-size: 18px;
    }
    @media (max-width: 370px) {
        font-size: 14px;
    }
`;

const JobDescription = styled.div`
    padding: 5px 50px;
    line-height: 40px;
    @media (max-width: 370px) {
        padding: 0 10px;
        line-height: 30px;
    }
`;

const IconsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    font-size: 25px;
    margin: 10px;
`;

const Icon = styled.i`
    width: 60px;
    transform: scale(1);
    transition: all 0.1s ease-in;
    &:hover {
        transform: scale(1.3);
    }
`;

const Anchor = styled.a`
    text-decoration: none;
    color: ${props => props.theme.fontColor};
`;

const Home = (props) => {
    return (
        <Container>
            <Intro>
                <Text>hey, I'm</Text>
                <Name>Uddesh</Name>
            </Intro>
            <ProfileContainer>
                <ProfileCircle>
                    <ProfilePicture src={Picture} alt="picture" />
                </ProfileCircle>
                <JobTitleDiv>
                    <Text><b>full stack developer</b></Text>
                </JobTitleDiv>
                <JobDescription>
                    <Text>javascript lover | Full Stack Developer | ReactJS | NodeJS | Blogger</Text>
                </JobDescription>
            </ProfileContainer>
            <IconsDiv>
                <Anchor href="https://gitlab.com/UddeshJain" rel="noopener" target="_blank"><Icon className="fab fa-gitlab" alt="Gitlab" /></Anchor>
                <Anchor href="https://github.com/UddeshJain" rel="noopener" target="_blank"><Icon className="fab fa-github" alt="Github" /></Anchor>
                <Anchor href="https://dev.to/uddeshjain" rel="noopener" target="_blank"><Icon className="fab fa-dev" alt="Dev Community" /></Anchor>
                <Anchor href="https://www.linkedin.com/in/uddeshjain/" rel="noopener" target="_blank"><Icon className="fab fa-linkedin" alt="Linkedin" /></Anchor>
                <Anchor href="https://twitter.com/Uddesh_" rel="noopener" target="_blank"><Icon className="fab fa-twitter" alt="twitter" /></Anchor>
            </IconsDiv>
            <Anchor href="https://www.google.com/search?q=UddeshJain" rel="noopener" target="blank"><Text>google <b>UddeshJain</b></Text></Anchor>
        </Container>
    )
}

export default Home;