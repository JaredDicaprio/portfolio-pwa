import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
    background: ${props => props.theme.bg};
    color: ${props => props.theme.fontColor};
`;

const Heading = styled.h1`
    font-size: 35px;
`;

const SkillsDiv = styled.div`
    width: 70vw;
    height: 60vh;
    background: #235bc1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
        display: initial;
        overflow-y: auto;
        height: 100%;
        width: 100vw;
    }
`;

const SkillsLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Skill = styled.div`
    width: 25vw;
    margin: 10px;
    @media (max-width: 768px) {
        width: 80vw;
    }
`;

const SkillTextDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Text = styled.p`
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-weight: 500;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const Progress = styled.progress`
    width: 100%;
    height: 5px;
`;

const Skills = (props) => {
    return (
        <Container>
            <Heading>Technical Skills</Heading>
            <SkillsDiv>
                <SkillsLeft>
                    {props.data.leftSkills.map((data, index) => (
                        <Skill key={index}>
                            <SkillTextDiv>
                                <Text>{data.technology}</Text>
                                <Text>{data.level}%</Text>
                            </SkillTextDiv>
                            <Progress max="100" value={data.level} />
                        </Skill>
                    ))}
                </SkillsLeft>

                <SkillsLeft>
                {props.data.rightSkills.map((data, index) => (
                        <Skill key={index}>
                            <SkillTextDiv>
                                <Text>{data.technology}</Text>
                                <Text>{data.level}%</Text>
                            </SkillTextDiv>
                            <Progress max="100" value={data.level} />
                        </Skill>
                    ))}
                </SkillsLeft>
            </SkillsDiv>
        </Container>
    )
}

export default Skills;