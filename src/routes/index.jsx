import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Homepage from "pages/Homepage";
import { Header, Footer } from "containers/Homepage";
import Team from "containers/Team";

import Events from "containers/Events";
import EventDetails from "containers/Events/EventDetials";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home">
          <Homepage />
        </Route>
        <Route path="/events/:eventId">
          <EventDetails />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/blogs">
          <Team />
        </Route>
        <Route path="/faq">
          <Team />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
