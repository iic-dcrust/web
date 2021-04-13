import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Main>
            <Container>
            <Logo src='https://www.edufever.com/wp-content/uploads/2016/12/dcrust-logo.jpg'/>
            <Name>Institute Innovation Cell</Name>
            </Container>
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>Events</NavItem>
                <NavItem>Blogs</NavItem>
                <NavItem>FAQ's</NavItem>
                <NavItem>Our Team</NavItem>
                <NavButton>Login</NavButton>
            </Nav>
        </Main>
    )
}

export default Header

const Main = styled.div`
width:100%;
position:fixed;
z-index:101;
background-color:#fff;
height:65px;
display:flex;
align-items:center;
justify-content:space-between;
border-bottom: 1px solid rgb(232, 232, 232);
`
const Name=styled.h1`
font-size:26px;
`
const Logo =styled.img`
height:45px;
`
const Container =styled.div`
display:flex;
margin-left:30px;
flex:0.5;
`
const Nav=styled.div`
display:flex;
justify-content:space-evenly;
flex:1;
`
const NavItem =styled.span`
height:65px;
padding:0 20px;
display:flex;
font-weight:500;
font-size:16px;
cursor: pointer;
align-items:center;
:hover{
    background-color:#fafafa
}
`
const NavButton =styled.button`
height:35px;
cursor:pointer;
margin:auto 0;
background-color:#fff;
border:1px solid #0e95d4;
border-radius:20px;
color:#0e95d4;
font-weight:700;
padding:5px 10px;
transition:0.35s;

:hover{
    transition:0.4s;
    background-color:#0e95d4;
    color:white;
}
`