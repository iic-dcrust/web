import { ArrowRight } from "@material-ui/icons";
import { getDeviceType } from "helpers";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { appColors } from "styles/colors";
import { TeamData } from "helpers/Data";

const HomeTeam = () => {
	const history = useHistory();
	return (
		<Container>
			<Head>Meet the Team</Head>
			<Box>
				{TeamData["teacher"].map((item) => (
					<Person>
						<Image src={item.image} />
						<Name>{item.name}</Name>
						<Work>{item.work}</Work>
					</Person>
				))}
			</Box>
			<Button
				onClick={() => {
					history.push("/team");
					window.scrollTo(0, 0);
				}}
			>
				View More <ArrowRight />
			</Button>
		</Container>
	);
};

export default HomeTeam;

const Container = styled.div`
	align-items: center;
	padding: 10vh 10vw;

	display: flex;
	flex-direction: column;
`;

const Head = styled.h1`
	color: ${appColors.homeText};
	font-size: ${getDeviceType() === "mobile" ? "28px" : "32px"};
	font-weight: 600;
	margin-bottom: ${getDeviceType() === "mobile" ? "50px" : "70px"};
	text-decoration: underline;
	text-decoration-color: ${appColors.homeDecor};
	text-underline-offset: 10px;
	text-align: center;
`;

const Box = styled.div`
	display: flex;
	flex-direction: ${getDeviceType() === "mobile" ? "column" : "row"};
	justify-content: space-between;
	margin-bottom: 30px;
`;

const Person = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${appColors.primary};
	padding-right: 15px;
`;

const Name = styled.h3`
	padding: 10px;
	font-weight: 600;
`;
const Image = styled.img`
	height: ${getDeviceType() === "mobile" ? "100px" : "180px"};
	border-radius: 45% 10%;
`;
const Work = styled.h4`
	padding-bottom: 15px;
	font-weight: 500;
`;

const Button = styled.button`
	background-color: ${appColors.bgVar3};
	outline: none;
	border: 1px solid ${appColors.homeDecor};
	padding: 10px;
	cursor: pointer;
	font-size: 15px;
	font-weight: bold;
	color: ${appColors.accentLight};
	border-radius: 15px;
	display: flex;
	align-items: center;
	max-width: 150px;
	:hover {
		color: ${appColors.bgVar3};
		background-color: ${appColors.accentLight};
		transition: all 0.35s;
	}
`;
