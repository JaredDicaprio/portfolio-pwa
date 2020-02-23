import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogPage from "../../components/BlogPage/index";
import Spinner from "../Spinner/index";

const BlogPageContainer = () => {
    const [postData, setPostData] = useState([]);
    const [activePost, setActivePost] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://dev.to/api/articles?username=uddeshjain")
            .then(data => {
                setPostData(data.data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    const postClickHandler = event => {
        setActivePost(parseInt(event.currentTarget.id));
    };

    return (
        <>
            {postData[0] ? (
                <BlogPage
                    postData={postData}
                    activePost={activePost}
                    loading={loading}
                    postClickHandler={postClickHandler}
                />
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default BlogPageContainer;
