import React from "react";
import styled from "styled-components";	
import {getDeviceType} from "helpers";
import TeamDetails from "./TeamDetails";
import { Grid } from "@material-ui/core";

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
			<Grid container spacing={0}>
			<Grid item xs={12} spacing ={3}>
				<TeamDetails position ="President" name ="Suman Sangwan" />	
				<TeamDetails position ="Member" name="Harsh"/>
			</Grid>
			</Grid>
		</Container>
	);
};

export default Team;

const Container = styled.div`
	width: ${getDeviceType() === "mobile" ? "75vw" : "100%"};
	padding-left:390px;
	padding-top:80px;
	margin:0 auto;
	background-color:#f5f5f5;
`;

const Box = styled.div`
	margin-top: 30px;
	width: ${getDeviceType() === "mobile" ? "75vw" : "50vw"};
	height: ${getDeviceType() === "mobile" ? "30vh" : "45vh"};
	position:absolute;
	display:flex;
	justify-content:center;
	background-color:rgba(0,0,0,0.2);
`;

const Heading = styled.h1`
	font-size: ${getDeviceType() === "mobile" ? "30px" : "60px"};
	font-family: time;
	color:purple;

`;
const Image = styled.img`
	margin-top: 30px;
	height: ${getDeviceType() === "mobile" ? "30vh" : "45vh"};
	width: ${getDeviceType() === "mobile" ? "75vw" : "50vw"};
`
