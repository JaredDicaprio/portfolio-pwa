import React from 'react';
import Container from "./style/Container";
import ProjectWrapper from "./style/ProjectWrapper";

const Projects = (props) => {
    return (
        <Container>
            <h2>Some awesome work of mine</h2>
            <div>
                {props.data.map((data, index) => (
                    <ProjectWrapper key={index}>
                        <h3>{data.name} <a href={data.link} target="_blank" rel="noopener noreferrer"><i className="fas fa-link" alt="project link"></i></a></h3>
                        <h5>{data.date}</h5>
                        <p>{data.description}</p>
                    </ProjectWrapper>
                ))}
            </div>
        </Container>
    )
}

export default Projects;