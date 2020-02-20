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

    return (
        <Container>
            <Heading>Some awesome work of mine</Heading>
            <ProjectMain>
                <Wrapper>
                    {props.data.map((data, index) => (
                        <ProjectContent key={index}>
                            <RedirectDiv>
                                <Span>{data.name}</Span>
                                <Anchor href={data.link} target="_blank">
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