import React from 'react';
import styled from '@emotion/styled';

const PostInfo = styled.div`
    width: 60vw;
    background: #235bc1;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    color: #ffffff;
    @media (max-width: 760px) {
        width: 100vw;
        height: 40vh;
    }
`;

const ArticleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 140px;
    align-self: center;
    border-radius: 50%;
    background: #00BCD4;
    @media (max-width: 760px) {
        display: none;
    }
`;

const Icon = styled.i`
    color: black;
    font-size: 50px;
`;

const PostTitle = styled.h3`
    margin: 0;
    padding: 20px;
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-self: center;
    justify-content: center;
    width: 70%;
    @media (max-width: 760px) {
        display: none;
    }
`;

const Text = styled.p`
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    margin: 5px;
    font-size: 15px;
    border-radius: 4px;
    &:hover {
        background: #0d244e;
    }
`;

const Anchor = styled.a`
    align-self: center;
    margin-top: 50px;
    width: 30%;
    padding: 10px;
    border-radius: 10px;
    background: #0f2f69;
    color: #ffffff;
    text-decoration: none;
    &:hover {
        background: #0d244e;
    }
    @media (max-width: 760px) {
        width: 50%;
        margin: 0;
    }
`;

const Bloginfo = ({ title, date, tags, url}) => {
    let colors = [
        '#eb345c',
        '#ac3483',
        '#eb3434',
        '#eba234',
        '#dceb34',
        '#37eb34'
    ]
    return (
        <PostInfo>
            <ArticleDiv>
                <Icon className="far fa-file-alt" />
            </ArticleDiv>
            <PostTitle>{"`" + title.toUpperCase() + "`"}</PostTitle>
            <Tags>
            {tags.map((tag, index) => (
                <Text style={{background: colors[index]}} key={index}>#{tag}</Text>
            ))}
            </Tags>
            <Anchor href={url} target="blank">Read More</Anchor>
        </PostInfo>
    )
}

export default Bloginfo;