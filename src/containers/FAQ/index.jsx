import React from "react";
import styled from "styled-components";
import { getDeviceType } from "helpers";
import FAQDetails from "./FAQDetails";

const FAQ = () => {
	return (
		<Container>
			<Cover>
				<Heading>FAQ</Heading>
				<Image
					src="https://media.osram.info/media/img/osram-dam-300240/s,x,1260,y,0/338965_Faq_getty_82041747_cropped_672x260.jpg"
					alt=" "
				/>
			</Cover>
			<FAQDetails />
		</Container>
	);
};

export default FAQ;

const Container = styled.div`
	padding-top: 70px;
	text-align: center;
`;
const Cover = styled.div`
	padding: ${getDeviceType() === "mobile" ? "30px 10vw" : "30px 10vw"};
	width: 60vw;
	height: 200px;
`;
const Heading = styled.h1`
	margin: 10px auto;
	width: ${getDeviceType() === "mobile" ? "80vw" : "80vw"};
	height: ${getDeviceType() === "mobile" ? "200px" : "400px"};
	font-size: ${getDeviceType() === "mobile" ? "30px" : "80px"};
	font-family: time;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.25);
	color: #00203fff;
	border-radius: 20px;
`;
const Image = styled.img`
	margin-top: 10px;
	border-radius: 20px;
	width: 80vw;
	height: ${getDeviceType() === "mobile" ? "200px" : "400px"};
`;
