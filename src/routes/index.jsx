import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Homepage from "pages/Homepage";
import { Header, Footer } from "containers/Homepage";
import FAQ from "containers/FAQ";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home">
          <Homepage />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
