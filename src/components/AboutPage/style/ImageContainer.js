import styled from '@emotion/styled';

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35vw;
    height: 70vh;
    /* border: 2px solid black; */
    & > img {
        width: 100%;
        @media (max-width: 670px) {
            width: 80%;
        };
    };
    @media (max-width: 670px) {
        width: 100vw;
        height: 45vh;
    }
    @media (max-height: 670px) {
        height: 350px;
    }
`;

export default ImageContainer;