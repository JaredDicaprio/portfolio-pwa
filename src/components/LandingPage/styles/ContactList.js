import styled from '@emotion/styled';

const SocialList = styled.ul`
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
    & > li {
        margin: 10px 0 0 0;
        & > svg {
            margin: 10px 10px 0 0;
            fill: #939396;
        };
        & > a {
            text-decoration: none;
            color: ${props => props.theme.fontColor};
        };
        & > p {
            display: inline;
        };
    };
`;

export default SocialList;