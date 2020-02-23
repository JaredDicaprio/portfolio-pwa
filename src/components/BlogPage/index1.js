import React from "react";
import styled from "@emotion/styled";
import Bloginfo from "./BlogInfo";
import Spinner from "../Spinner";

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
        height: 50vh;
    }
    @media (max-width: 370px) {
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
    &::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: 760px) {
        height: 90%;
    }
`;

const ListItem = styled.li`
    list-style: none;
    padding: 15px;
    margin: 5px;
    border-radius: 25px;
    cursor: pointer;
    background: ${props => (props.isActive ? "#a3a3a3" : null)};
    font-weight: 500;
    line-height: 30px;
    @media (max-width: 760px) {
        font-size: 14px;
        margin: 0px;
        padding: 10px;
        line-height: 30px;
    }
    @media (max-width: 370px) {
        font-size: 12px;
        margin: 0px;
        padding: 10px;
        line-height: 30px;
    }
`;

const Blogs = props => {

    return props.loading ? (
        <Spinner />
    ) : (
        <Container>
            <Heading>Here are few posts</Heading>
            <PostAll>
                <SubHeading>Here are few posts</SubHeading>
                <PostList>
                    <ul>
                        {props.postData.map((data, index) => (
                            <ListItem
                                isActive={index === props.activePost}
                                id={index}
                                onClick={e => props.postClickHandler(e)}
                                key={index}
                            >
                                {data.title}
                            </ListItem>
                        ))}
                    </ul>
                </PostList>
            </PostAll>
            {props.postData[props.activePost] ? (
                <Bloginfo
                    title={props.postData[props.activePost].title}
                    date={props.postData[props.activePost].published_at}
                    tags={props.postData[props.activePost].tag_list}
                    url={props.postData[props.activePost].url}
                    reactions={props.postData[props.activePost].positive_reactions_count}
                />
            ) : null}
        </Container>
    );
};

export default Blogs;
