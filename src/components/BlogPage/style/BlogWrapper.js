import styled from "@emotion/styled";

const BlogWrapper = styled.div`
    width: 27%;
    margin: 20px 20px;
    padding: 0 0 15px 0;
    background: ${props => props.theme.projectColor};
    box-shadow: 0 0 20px 0 ${props => props.theme.projectShadowHover};
    transition: box-shadow 500ms;
    word-wrap: break-word;
    border-radius: 10px 10px 0 0;
    &:hover {
        box-shadow: 0 10px 50px 0 ${props => props.theme.projectShadowHover};
    };
    & > div {
        padding: 0 15px 15px 15px;
    };
    & > img {
        width: 100%;
        min-height: 250px;
        border-radius: 10px 10px 0 0;
        @media (max-width: 768px) {
            min-height: 300px;
        }
    };
    & > div > h5 {
        color: ${props => props.theme.fontColor};
        /* font-size: 14px; */
        /* letter-spacing: 2px; */
        & > a {
            text-decoration: none;
            color: ${props => props.theme.accentColor}
        };
    };
    & > div > p {
        font-size: 14px;
        font-weight: 500;
        line-height: 23px;
        opacity: 0.9;
    };
    & > div > a {
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        color: ${props => props.theme.accentColor};
        text-decoration: none;
    }
    @media (max-width: 768px) {
        width: 100%;
        box-shadow: 0 10px 50px 0 ${props => props.theme.projectShadowHover};
        text-align: center;
    }
`;

export default BlogWrapper;