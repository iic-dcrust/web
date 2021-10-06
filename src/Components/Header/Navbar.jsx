import React from "react";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Profile from "./Navtabs/profile";
// import Notification from "./Navtabs/notification";
import { useStyles } from "./HeaderStyles";
// import Messages from "./Navtabs/Messages";
// import MenuIcon from "@material-ui/icons/Menu";
import dcrust_logo from "../../images/dcrust_logo.jpeg";
import style from '../BodyComponent/BodyComponent.module.css';
export default function Navbar({ handleDrawerOpen }) {
  const classes = useStyles();

  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <div className={style.logoBox}>
          <div className={style.logoimg}>
          <img src={dcrust_logo} className={style.logo}/>
          </div>
          <div className={style.logoText}>Institute Innovation Cell</div>
        </div>
        <Hidden smDown>
          <Box style={{ display: "flex" }}>
            
            <Profile />
          </Box>
        </Hidden>
        {/* <Hidden mdUp>
          <IconButton color='inherit' onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden> */}
      </Toolbar>
    </AppBar>
  );
}
