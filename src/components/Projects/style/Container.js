import styled from "@emotion/styled";
import { keyframes } from '@emotion/core'

const fadeInUp = keyframes`
    0% {
        opacity: 0;
    };
    100% {
        opacity: 1;
        transform: none;
  };
`

const Container = styled.div`
    display: flex;
    width: 100vw;
    align-items: center;
    flex-direction: column;
    background: ${props => props.theme.bg};
    color: ${props => props.theme.fontColor};
    animation: ${fadeInUp} 0.8s ease;
    & > div {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        @media (max-width: 768px) {
            width: 100%;
        }
    };
    & > h2 {
        text-align: center;
    };
`;

export default Container;