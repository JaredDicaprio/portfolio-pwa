import styled from '@emotion/styled';

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 70vh;
    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 20px solid ${props => props.theme.bg === "#ffffff" ? "#a0bee4" : "#043157"};
        border-radius: 50%;
        & > img {
            width: 300px;
            border: 20px solid ${props => props.theme.bg === "#ffffff" ? "#c4d7fe" : "#4edac4"};
            border-radius: 50%;
            float: none;
            @media (max-width: 670px) {
                width: 200px;
            };
        };

    }
    @media (max-width: 670px) {
        width: 100vw;
        height: 45vh;
    }
    @media (max-height: 670px) {
        height: 600px;
    }
`;

export default ImageContainer;