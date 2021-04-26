import React, { useState } from "react";
import styled from "styled-components";
import { MainLogo } from "components";
import { getDeviceType } from "helpers";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer, IconButton } from "@material-ui/core";
import DrawerStructure from "./drawer";
import { useHistory } from "react-router-dom";
import LoginModal from "./LoginModal";

const Header = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [login, setLogin] = useState(false);

  const handleOpenLogin = () => {
    setLogin(true);
  };

  const handleCloseLogin = () => {
    setLogin(false);
  };
  const handleChange = (type) => {
    setOpen(false);
    switch (type) {
      case "home":
        history.push("/home");
        break;
      case "login":
        break;
      default:
        history.push("/home");
    }
  };
  return (
    <Main>
      <Container>
        <MainLogo />
        <Name>Institute Innovation Cell</Name>
      </Container>
      <Nav>
        <NavItem onClick={() => handleChange("home")}>Home</NavItem>
        <NavItem>Events</NavItem>
        <NavItem>Blogs</NavItem>
        <NavItem>FAQ's</NavItem>
        <NavItem>Our Team</NavItem>
        <NavButton onClick={handleOpenLogin}>Login</NavButton>
      </Nav>
      <LoginModal login={login} handleCloseLogin={handleCloseLogin} />
      <DrawerIcon>
        <IconButton>
          <MenuIcon style={{ color: "#fafafa" }} onClick={toggleDrawer} />
        </IconButton>
      </DrawerIcon>
      <Drawer anchor={"bottom"} open={open} onClose={toggleDrawer}>
        <DrawerStructure
          handleOpenLogin={handleOpenLogin}
          login={login}
          handleCloseLogin={handleCloseLogin}
          handleChange={handleChange}
        />
      </Drawer>
    </Main>
  );
};

export default Header;

const Main = styled.div`
  width: 100%;
  position: fixed;
  z-index: 101;
  background-color: #040016;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fafafa;
  border-bottom: 1px solid #0e95d4;
`;
const Name = styled.h1`
  display: flex;
  align-items: center;
  font-size: ${getDeviceType() === "mobile" ? "16px" : "22px"};
  margin-left: 20px;
`;
const DrawerIcon = styled.span`
  display: ${getDeviceType() === "desktop" ? "none" : ""};
`;
const Container = styled.div`
  display: flex;
  margin-left: 30px;
  flex: 0.5;
`;
const Nav = styled.div`
  display: ${getDeviceType() === "desktop" ? "flex" : "none"};
  justify-content: space-evenly;
  flex: 1;
`;
const NavItem = styled.span`
  height: ${getDeviceType() === "desktop" ? "65px" : "40px"};
  padding: ${getDeviceType() === "desktop" ? "0 20px" : "0"};
  display: flex;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  align-items: center;
  :hover {
    background-color: ${getDeviceType() === "desktop" ? "#0e95d4" : ""};
  }
`;
const NavButton = styled.button`
  height: 35px;
  cursor: pointer;
  margin: auto 0;
  background-color: #0e95d4;
  border: 1px solid #0e95d4;
  border-radius: 20px;
  color: #fafafa;
  font-weight: 700;
  padding: 5px 10px;
  transition: 0.35s;
  :hover {
    transition: 0.4s;
    background-color: #fafafa;
    color: #0e95d4;
  }
`;
