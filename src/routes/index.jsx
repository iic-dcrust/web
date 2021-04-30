import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Homepage from "pages/Homepage";
import { Header, Footer } from "containers/Homepage";
import FAQ from "containers/FAQ";
import Team from "containers/Team";
import { useStateValue } from "helpers/StateProvider";
import axios from "axios";
import Events from "containers/Events";

export default function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${localStorage.getItem(
            "token"
          )}`
        )
        .then((res) => {
          dispatch({
            type: "SET_USER",
            user: {
              id: res.data.sub,
              firstName: res.data.given_name,
              lastName: res.data.family_name,
              email: res.data.email,
            },
          });
        });
    } else {
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home">
          <Homepage />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/blogs">
          <Team />
        </Route>
        <Route path="/faq">
          <Team />
          {/* <FAQ /> */}
        </Route>
        <Route path="/team">
          <Team />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
