import React from "react";
import styled from "styled-components";	
import {getDeviceType} from "helpers";

import TeamBox from "./TeamBox";

const Team = () => {
	return (
		<Container>
			<Box>
				<Heading>
					Meet the Team
				</Heading>
			</Box>
			<Image
				src="https://i.pinimg.com/originals/70/9d/00/709d007dc00655a582927bdb1e08e080.jpg"
			/>
			<TeamBox />
		</Container>
	);
};

export default Team;

const Container = styled.div`
<<<<<<< HEAD
	padding-top: 70px;
	min-height: 70vh;

	display: grid;
	justify-content: center;
	align-content: center;
`;

const Heading = styled.h1`
	width: ${getDeviceType() === "mobile" ? "35vw" : "50vw"};
=======
	width: ${getDeviceType() === "mobile" ? "75vw" : "100%"};
	padding-left:50px;
	padding-top:80px;
	margin:0 auto;
	background-color:#f5f5f5;
`;

const Box = styled.div`
	padding-left:340px;
	margin-top: 30px;
	position:absolute;
`;

const Heading = styled.h1`
	width: ${getDeviceType() === "mobile" ? "75vw" : "50vw"};
>>>>>>> team
	height: ${getDeviceType() === "mobile" ? "30vh" : "45vh"};
	font-size: ${getDeviceType() === "mobile" ? "30px" : "60px"};
	font-family: time;
	color:purple;
	background-color:rgba(0,0,0,0.2);
	display:flex;
	justify-content:center;
<<<<<<< HEAD
`;
const Image = styled.img`
	max-width: 100vw;
=======
>>>>>>> team
`;
const Image = styled.img`
	padding-left:340px;
	margin-top: 30px;
	background-size:cover;
	height: ${getDeviceType() === "mobile" ? "30vh" : "45vh"};
	width: ${getDeviceType() === "mobile" ? "75vw" : "50vw"};
`
