import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Homepage from "pages/Homepage";
import { Header, Footer } from "containers";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home">
          <Homepage />
        </Route>
        <Route path="/users">Login</Route>
        <Route path="/register">Register</Route>
      </Switch>
      <Footer />
    </Router>
  );
}
