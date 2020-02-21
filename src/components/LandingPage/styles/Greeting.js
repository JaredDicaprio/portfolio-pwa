import styled from '@emotion/styled';

const GreetingDiv = styled.div`
    background: #4edac4;
    color: #ffffff;
    display: inline-block;
    padding: 0 30px;
    border-radius: 50px 50px 50px 0px;
    font-size: 16px;
    font-weight: 600;
    & > p {
        margin: 10px 5px;
        padding: 0;
    }
`;

export default GreetingDiv;