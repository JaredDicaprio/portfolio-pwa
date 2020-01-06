import React from 'react';
import {Link} from '@reach/router';
import styled from '@emotion/styled';
import {keyframes} from '@emotion/core';

const Container = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    background: ${props => props.theme.bg};
`;
const MenuButtonDiv = styled.div`
    z-index: 100;
`;
const MenuButton = styled.i`
    font-size: 25px;
    margin: 30px;
    cursor: pointer;
    color: ${props => props.isDark ? "#ffffff" : "#000000"};
`;

const HeaderList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    display: flex;
    width: 40vw;
    height: 10vh;
    left: 50vw;
`;
const ListItem = styled.li`
    list-style: none;
    display: inline;
    font-size: 20px;
    cursor: pointer;
    color: ${props => props.theme.fontColor};
    &:hover {
        color: #235bc1;
    };
    @media (max-width: 768px) {
        display: none;
    }
`;
const ThemeIcon = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    position: absolute;
    left: 85vw;
    width: 10vw;
    height: 10vh;
`;

const ThemeIconI = styled.i`
    font-size: 25px;
    margin: 30px;
    cursor: pointer;
    color: ${props => props.isDark ? "#ffffff" : "#000000"};
`;

const WidthAnimation = keyframes`
    100% { width: 100vw; };
`;

const MenuListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 0vw;
    height: 100vh;
    z-index: 10;
    background-color: black;
    animation: ${WidthAnimation} 0.5s forwards;
`;

const UnorderedItem = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0px;
    list-style: none;
`

const MenuListItem = styled.li`
    padding: 40px;
    font-size: 25px;
    height: 50px;
    cursor: pointer;
    color: white;
    &:hover {
        color: #235bc1;
    }
`;

const NavBar = (props) => {
    return (
        <Container>
            <MenuButtonDiv onClick={props.NavBarClickHandler}>
                {props.open ? (
                    <MenuButton className="fas fa-times" style={{color: "#ffffff"}} />
                ) : (
                    <MenuButton className="fas fa-bars" isDark={props.isDark} />
                )}
            </MenuButtonDiv>
            <HeaderList>
                <Link to="/" style={{textDecoration: "none"}}><ListItem>Home</ListItem></Link>
                <Link to="/blogs" style={{textDecoration: "none"}}><ListItem>Blogs</ListItem></Link>
                <Link to="/" style={{textDecoration: "none"}}><ListItem>Home</ListItem></Link>
            </HeaderList>
            <ThemeIcon onClick={props.ThemeHandler}>
                <ThemeIconI className={props.isDark ? "fas fa-sun" : "fas fa-moon"} isDark={props.isDark} />
            </ThemeIcon>
            {props.open ? (
                <MenuListContainer>
                    <UnorderedItem onClick={props.NavBarClickHandler}>
                        <Link to="/" style={{textDecoration: "none"}}><MenuListItem>Home</MenuListItem></Link>
                        <Link to="/blogs" style={{textDecoration: "none"}}><MenuListItem>Blogs</MenuListItem></Link>
                        <Link to="/skills" style={{textDecoration: "none"}}><MenuListItem>Skills</MenuListItem></Link>
                        <Link to="/projects" style={{textDecoration: "none"}}><MenuListItem>Projects</MenuListItem></Link>
                        <a href="https://uddesh.me" target="blank" style={{textDecoration: "none"}}><MenuListItem>Resume</MenuListItem></a>
                    </UnorderedItem>
                </MenuListContainer>
            ) : null}
            
        </Container>
    )
}

export default NavBar;