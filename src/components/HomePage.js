import React from 'react';
import styled from '@emotion/styled';

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
`;

const Text = styled.p`
    font-size: 20px;
    letter-spacing: 1px;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const JobDescription = styled.div`
    padding: 5px 50px;
    line-height: 40px;
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
                    <ProfilePicture src="https://i.ibb.co/52sMn0Z/profile.png" alt="picture" />
                </ProfileCircle>
                <JobTitleDiv>
                    <Text><b>full stack developer</b></Text>
                </JobTitleDiv>
                <JobDescription>
                    <Text>javascript lover | Full Stack Developer | ReactJS | NodeJS | Blogger</Text>
                </JobDescription>
            </ProfileContainer>
            <IconsDiv>
                <Anchor href="https://gitlab.com/UddeshJain" target="_blank"><Icon className="fab fa-gitlab" /></Anchor>
                <Anchor href="https://github.com/UddeshJain" target="_blank"><Icon className="fab fa-github" /></Anchor>
                <Anchor href="https://dev.to/uddeshjain" target="_blank"><Icon className="fab fa-dev" /></Anchor>
                <Anchor href="https://www.linkedin.com/in/uddeshjain/" target="_blank"><Icon className="fab fa-linkedin" /></Anchor>
                <Anchor href="https://twitter.com/Uddesh_" target="_blank"><Icon className="fab fa-twitter" /></Anchor>
            </IconsDiv>
            <Anchor href="https://www.google.com/search?q=UddeshJain" target="blank"><Text>google <b>UddeshJain</b></Text></Anchor>
        </Container>
    )
}

export default Home;