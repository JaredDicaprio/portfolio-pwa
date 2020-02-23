import styled from '@emotion/styled';

const SocialList = styled.ul`
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
    & > li {
        margin: 10px 0;
        /* &:hover {
            color: #4edac4;
        }; */
        & > i {
            margin: 0 10px 0 0;
        };
        & > a {
            text-decoration: none;
            color: ${props => props.theme.fontColor};
            /* &:hover {
                color: #4edac4;
            }; */
        };
        & > p {
            display: inline;
        };
    };
`;

export default SocialList;