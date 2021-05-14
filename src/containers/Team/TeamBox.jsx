import React, { useState } from "react";
import styled from "styled-components";
import { TeamData } from "helpers/Data";
import { appColors } from "styles/colors.js";
import TeamHeader from "./TeamHeader";
import TeamDetails from "./TeamDetails";
import { getDeviceType } from "helpers";

function TeamBox() {
	const [type, setType] = useState("all");
	return (
		<Container>
			<TeamHeader setType={setType} type={type} />
			<Box>
				<Info>
					{getDeviceType() === "mobile" ? "Tap" : "Hover"} on Images to Know
					More.
				</Info>
				{TeamData[type].map((item) => {
					if ((item.type = type)) {
						return <TeamDetails details={item} />;
					} else {
						return null;
					}
				})}
			</Box>
		</Container>
	);
}

export default TeamBox;

const Info = styled.span`
	position: absolute;
	top: 108px;
	left: 50%;
	transform: translateX(-50%);
	color: grey;
	font-weight: 400;
	font-size: 12px;
`;

const Container = styled.div`
	width: "100%";
	box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
		rgba(17, 17, 26, 0.05) 0px 8px 32px;
	border: 1px solid rgba(173, 173, 173, 0.541);
	padding-bottom: 5px;
	border-radius: 10px;
	margin-bottom: 20px;
	align-items: center;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const Box = styled.div`
	background-color: ${appColors.bgVar3};
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding-top: 20px;
`;
