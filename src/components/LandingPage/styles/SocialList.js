import styled from '@emotion/styled';

const SocialList = styled.ul`
    position: relative;
    list-style: none;
    margin: 40px 0 0 0;
    padding: 0;
    text-decoration: none;
    & > li {
        display: inline;
        margin: 0 30px 0 0;
        &:last-child {
            margin: 0;
        };
        & > a {
            font-size: 20px;
            text-decoration: none;
            color: ${props => props.theme.fontColor};
            &:hover {
                color: #4edac4;
            };
            & > i {
                font-size: 20px;
                transform: scale(1);
                transition: all 0.3s ease;
                &:hover {
                    transform: scale(1.3);
                };
            };
        };
    };
`;

export default SocialList;