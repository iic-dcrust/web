import styled from 'styled-components'
import React from 'react'
import Home from '@material-ui/icons/Home';
import { AccountBox, Event, PeopleRounded, QuestionAnswer, RateReview } from '@material-ui/icons';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const drawer = () => {
    const IconStyle={color:'#fafafa'}

    return (
        <DrawerBox> 
             <List>
                <ListItem>
                     <ListItemIcon ><Home style={IconStyle}/></ListItemIcon>
                     <ListItemText><NavItem>Home</NavItem></ListItemText>
                </ListItem>
                <ListItem>
                     <ListItemIcon ><Event style={IconStyle}/></ListItemIcon>
                     <ListItemText><NavItem>Events</NavItem></ListItemText>
                </ListItem>
                <ListItem>
                     <ListItemIcon ><RateReview style={IconStyle}/></ListItemIcon>
                     <ListItemText><NavItem>Blogs</NavItem></ListItemText>
                </ListItem>
                <ListItem>
                     <ListItemIcon ><QuestionAnswer style={IconStyle}/></ListItemIcon>
                     <ListItemText><NavItem>FAQ's</NavItem></ListItemText>
                </ListItem>
                <ListItem>
                     <ListItemIcon ><PeopleRounded style={IconStyle}/></ListItemIcon>
                     <ListItemText><NavItem>Our Team</NavItem></ListItemText>
                </ListItem>
                <ListItem>
                     <ListItemIcon ><AccountBox style={IconStyle}/></ListItemIcon>
                     <ListItemText><NavItem>Login/Register</NavItem></ListItemText>
                </ListItem>
            </List>
            </DrawerBox>
    )
}

export default drawer

const DrawerBox=styled.div`
    color:#fafafa;
    background-color:#040016;
    text-align:center;
`
const NavItem =styled.span`
height:'40px';
padding:'0';
display:flex;
font-weight:500;
font-size:16px;
cursor: pointer;
align-items:center;
`