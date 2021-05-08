import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";
import { appColors } from "styles/colors";
import Links from "./Links/Links";
import DcrustLogo from "../../assets/dcrust-logo.jpeg";

const Footer = () => {
	return (
		<Container>
			<Box>
				<Logo src={DcrustLogo} alt=""></Logo>
			</Box>
			<Links />
		</Container>
	);
};

export default Footer;

const Container = styled.div`
	background-color: ${appColors.primary};
	padding: ${getDeviceType() === "mobile" ? "25px" : "40px"};
	display: flex;
	justify-content: space-evenly;
`;
const Box = styled.div``;

const Logo = styled.img`
	width: ${getDeviceType() === "mobile" ? "65px" : ""};
`;
