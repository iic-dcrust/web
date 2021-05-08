import React from "react";
import styled from "styled-components";
import { getDeviceType } from "helpers";

import TeamBox from "./TeamBox";

const Team = () => {
	return (
		<Container>
			<Box>
				<Heading>Meet the Team</Heading>
			</Box>
			<Image src="https://i.pinimg.com/originals/70/9d/00/709d007dc00655a582927bdb1e08e080.jpg" />
			<TeamBox />
		</Container>
	);
};

export default Team;

const Container = styled.div`
	width: ${getDeviceType() === "mobile" ? "100vw" : "75vw"};
	margin: 0 auto;
	background-color: #f5f5f5;
	padding-top: 70px;
`;
const Box = styled.div`
	width: ${getDeviceType() === "mobile" ? "100vw" : "75vw"};
	height: ${getDeviceType() === "mobile" ? "40vh" : "50vh"};
	background-color: rgba(0, 0, 0, 0.699);
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Heading = styled.span`
	color: #fff;
	font-size: ${getDeviceType() === "mobile" ? "1.5rem" : "3.5rem"};
	font-family: Quicksand;
`;
const Image = styled.img`
	width: 100%;
	max-height: 50vh;
`;
