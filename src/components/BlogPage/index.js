import React from 'react';
import Container from "./style/Container";
import BlogWrapper from "./style/BlogWrapper";
import blogFallbackImage from "../../assets/blogFallback.png";

const Blogs = (props) => {
    // console.log(props.postData[0])
    return (
        <Container>
            <h2>All Posts</h2>
            <div>
                {props.postData.map((data, index) => (
                    <BlogWrapper key={index}>
                        <img src={data.cover_image ? data.cover_image : blogFallbackImage} alt="Cover" />
                        <div>
                            <h3>{data.title} </h3>
                            <h5>Posted On <a href={data.url} target="_blank" rel="noopener noreferrer">{new Date(data.published_at).toLocaleDateString()}</a> By <a href="https://dev.to/uddeshjain" target="_blank" rel="noopener noreferrer">@uddesh</a></h5>
                            <p>{data.description}</p>
                            <a href={data.url} target="_blank" rel="noopener noreferrer">Read More <i className="fas fa-link" alt="project link"></i></a>
                        </div>
                    </BlogWrapper>
                ))}
            </div>
        </Container>
    )
}

export default Blogs;