import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Switch, Route } from "react-router-dom";
// import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import AddGalleryImages from "../BodyComponent/AddGalleryImages";
import AddEvent from "../BodyComponent/AddEvent";
import AddTeam from "../BodyComponent/AddTeam";
import AddBlog from "../BodyComponent/AddBlog";
import Logout from "../BodyComponent/Logout";
import { useStyles } from "./HeaderStyles";

export default function HeaderComponent() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <div>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      {/* // registerian our routes  */}
      <Box className={classes.wrapper}>
        <Switch>
          {/* <Route path='/' component={<Dashboard />} /> */}
          <Route exact path='/addGalleryImages' render={() => <AddGalleryImages />} />
          <Route exact path='/addEvent' render={() => <AddEvent />} />
          <Route exact path='/addTeam' render={() => <AddTeam />} />
          <Route exact path='/addBlog' render={() => <AddBlog />} />
          <Route exact path='/logout' render={() => <Logout />} />
           <Route exact path='/' render={() => <AddGalleryImages />} />
        </Switch>
      </Box>
    </div>
  );
}
