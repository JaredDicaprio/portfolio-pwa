import styled from "@emotion/styled";

const Container = styled.div`
  width: 27%;
  margin: 20px 40px;
  background: ${props => props.theme.projectColor};
  box-shadow: 0 0 10px 0 ${props => props.theme.projectShadow};
  transition: box-shadow 500ms;
  padding: 10px 35px;
  word-wrap: break-word;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 10px 50px 0 ${props => props.theme.projectShadowHover};
  }
  & > h5 {
    color: ${props => props.theme.accentColor};
    font-size: 14px;
    letter-spacing: 2px;
  }
  & > p {
    font-size: 14px;
    font-weight: 500;
    line-height: 23px;
    opacity: 0.9;
  }
  & > h3 > a {
    cursor: pointer;
    margin-left: 10px;
    color: ${props => props.theme.accentColor};
    & > svg {
      transform: scale(1);
      transition: all 0.2s ease-in;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    box-shadow: 0 10px 50px 0 ${props => props.theme.projectShadowHover};
  }
`;

export default Container;
