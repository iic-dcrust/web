import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import styled from "styled-components";

import Homepage from "pages/Homepage";
import { Header, Footer } from "containers/Homepage";
import Team from "containers/Team";

import Events from "pages/Events";
import EventDetails from "containers/Events/EventDetials";

export default function App() {
	return (
		<Router>
			<Header />
			<MainWrapper>
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
					<Route>404</Route>
				</Switch>
			</MainWrapper>
			<Footer />
		</Router>
	);
}

const MainWrapper = styled.div`
	overflow-x: hidden;
`;
