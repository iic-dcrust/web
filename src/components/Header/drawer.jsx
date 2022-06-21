import styled from "styled-components";
import React from "react";
import Home from "@material-ui/icons/Home";
import {
  AccountBox,
  Event,
  PeopleRounded,
  QuestionAnswer,
  RateReview,
} from "@material-ui/icons";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import LoginModal from "./LoginModal";
import { useStateValue } from "helpers/StateProvider";

const Drawer = ({
  handleOpenLogin,
  login,
  handleCloseLogin,
  handleChange,
  toggleDrawer,
}) => {
  const IconStyle = { color: "#fafafa" };
  const [{ user }] = useStateValue();

  return (
    <DrawerBox>
      <List>
        <ListItem onClick={() => handleChange("home")}>
          <ListItemIcon>
            <Home style={IconStyle} />
          </ListItemIcon>
          <ListItemText>
            <NavItem>Home</NavItem>
          </ListItemText>
        </ListItem>
        <ListItem onClick={() => handleChange("events")}>
          <ListItemIcon>
            <Event style={IconStyle} />
          </ListItemIcon>
          <ListItemText>
            <NavItem>Events</NavItem>
          </ListItemText>
        </ListItem>
        <ListItem onClick={() => handleChange("achievements")}>
          <ListItemIcon>
            <RateReview style={IconStyle} />
          </ListItemIcon>
          <ListItemText>
            <NavItem>Achievements</NavItem>
          </ListItemText>
        </ListItem>
        <ListItem onClick={() => handleChange("faq")}>
          <ListItemIcon>
            <QuestionAnswer style={IconStyle} />
          </ListItemIcon>
          <ListItemText>
            <NavItem>FAQ's</NavItem>
          </ListItemText>
        </ListItem>
        <ListItem onClick={() => handleChange("team")}>
          <ListItemIcon>
            <PeopleRounded style={IconStyle} />
          </ListItemIcon>
          <ListItemText>
            <NavItem>Our Team</NavItem>
          </ListItemText>
        </ListItem>
        <ListItem onClick={() => handleChange("gallery")}>
          <ListItemIcon>
            <PeopleRounded style={IconStyle} />
          </ListItemIcon>
          <ListItemText>
            <NavItem>Image Gallery</NavItem>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AccountBox style={IconStyle} />
          </ListItemIcon>
          <ListItemText>
            <NavItem
              onClick={() => {
                handleOpenLogin();
                toggleDrawer();
              }}
            >
              {user ? "Logout" : "Login"}
            </NavItem>
          </ListItemText>
        </ListItem>
      </List>
      <LoginModal
        login={login}
        handleCloseLogin={handleCloseLogin}
        toggleDrawer={toggleDrawer}
      />
    </DrawerBox>
  );
};

export default Drawer;

const DrawerBox = styled.div`
  color: #fafafa;
  background-color: #040016;
  text-align: center;
`;
const NavItem = styled.span`
  height: "40px";
  padding: "0";
  display: flex;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  align-items: center;
`;
