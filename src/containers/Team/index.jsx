import React from "react";
import styled from "styled-components";	
import {getDeviceType} from "helpers";

const Team = () => {
	return (
		<Container>
			<Heading>
				Our Team
			</Heading>
			<Image
				src="https://i.pinimg.com/originals/70/9d/00/709d007dc00655a582927bdb1e08e080.jpg"
			/>
		</Container>
	);
};

export default Team;

const Container = styled.div`
	width: ${getDeviceType() === "mobile" ? "75vw" : "100vw"};
	padding-top: 70px;
	text-align: center;
`;

const Heading = styled.h1`
	padding: 3%;
	font-size: ${getDeviceType() === "mobile" ? "30px" : "60px"};
	align-items: center;
	font-family: time;
	color:#0e95d4;
	display: flex;
	position:absolute;
	justify-content: center;
`;
const Image = styled.img`
	margin-top: 30px;
	height: 45vh;
	width: 55%;
`
