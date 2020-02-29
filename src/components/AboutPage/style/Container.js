import styled from '@emotion/styled';
import { keyframes } from '@emotion/core'

const fadeInUp = keyframes`
    0% {
        opacity: 0;
        /* transform: translate3d(0, 10%, 0); */
    };
    100% {
        opacity: 1;
        transform: none;
  };
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100vw;
    height: 83vh;
    padding-bottom: 60px;
    background: ${props => props.theme.bg};
    color: ${props => props.theme.fontColor};
    animation: ${fadeInUp} 0.8s ease;
    @media (max-width: 670px) {
        flex-direction: column;
    }
    @media (max-height: 670px) {
        height: 600px;
    }
`;

export default Container;