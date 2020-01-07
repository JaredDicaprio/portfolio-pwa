import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import Bloginfo from './BlogInfo';

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 90vh;
    flex-direction: row;
    background: ${props => props.theme.bg};
    color: ${props => props.theme.fontColor};
    @media (max-width: 760px) {
        flex-direction: column;
    }
`;

const Heading = styled.h1`
    display: none;
    @media (max-width: 760px) {
        display: initial;
        align-self: center;
        font-size: 25px;
    }
`;

const PostAll = styled.div`
    order: 2;
    width: 40vw;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    @media (max-width: 760px) {
        width: 100vw;
        height: 80vh;
    }
    @media (max-width: 400px) {
        height: 65vh;
    }
`;

const SubHeading = styled.h2`
    @media (max-width: 760px) {
        display: none;
    }
`;

const PostList = styled.div`
    width: 100%;
    height: 70%;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
    @media (max-width: 760px) {
        height: 70%;
    }
`;

const ListItem = styled.li`
    list-style: none;
    padding: 15px;
    margin: 5px;
    border-radius: 25px;
    cursor: pointer;
    background: ${props => props.isActive ? "#a3a3a3" : null};
    font-weight: ${props => props.isActive ? "600" : "500"};
    line-height: 30px;
    @media (max-width: 400px) {
        font-size: 12px;
        margin: 0px;
        padding: 5px;
    }
`;

const Blogs = (props) => {

    const [postData, setPostData] = useState([])
    const [activePost, setActivePost] = useState(0)
    useEffect(() => {
        function fetchPost() {
        const url = 'https://dev.to/api/articles?username=uddeshjain'
        axios.get(url).then(result =>
            setPostData(result.data)
        ).catch(e => console.log(e))
        }
        fetchPost()
    }, []);

    const postClickHandler = (event) => {
        setActivePost(parseInt(event.currentTarget.id))
      }

    return (
        <Container>
            <Heading>Here are few posts</Heading>
            <PostAll>
                <SubHeading>Here are few posts</SubHeading>
                <PostList>
                    <ul>
                        {postData.map((data, index) => (
                            <ListItem
                                isActive={index === activePost}
                                id={index}
                                onClick={postClickHandler}
                                key={index}>
                                {data.title}
                            </ListItem>
                        ))}
                    </ul>
                </PostList>
            </PostAll>
            {postData[activePost] ? 
                <Bloginfo
                title={postData[activePost].title}
                date={postData[activePost].published_at}
                tags={postData[activePost].tag_list}
                url={postData[activePost].url}
                reactions={postData[activePost].positive_reactions_count}
                />
                : null
            }
        </Container>
    )
}

export default Blogs;