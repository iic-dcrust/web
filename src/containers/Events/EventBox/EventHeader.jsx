import React from "react";
import styled from "styled-components";
import ComputerIcon from "@material-ui/icons/Computer";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CodeIcon from "@material-ui/icons/Code";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import { getDeviceType } from "helpers";
import { appColors } from "styles/colors";
const EventHeader = () => {
	return (
		<>
			<Container>
				<Tag>
					<EventNoteIcon />
					<span> All</span>
				</Tag>
				<Tag>
					<ComputerIcon /> <span> Webinars</span>
				</Tag>
				<Tag>
					<WebAssetIcon /> <span> Workshops</span>
				</Tag>
				<Tag>
					<CodeIcon />
					<span> Hackathons</span>
				</Tag>
			</Container>
			<Cont>
				<Tag>All Time</Tag>
				<Tag>Upcoming</Tag>
				<Tag>Past</Tag>
			</Cont>
		</>
	);
};

export default EventHeader;
const Container = styled.div`
	flex: 1;
	width: 100%;
	justify-content: ${getDeviceType() === "desktop" ? "space-evenly" : ""};
	align-items: center;
	background-color: ${appColors.accentDark};
	display: flex;
	border-radius: 5px;
	overflow-x: scroll;
	font-size: ${getDeviceType() === "desktop" ? "20px" : "16px"};
	border-bottom: ${appColors.accentDark};
`;
const Tag = styled.span`
	padding: 15px 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	color: white;
	cursor: pointer;

	span {
		margin-left: 5px;
	}

	:hover {
		background-color: ${appColors.accentDark};
	}
`;

const Cont = styled.div`
	width: 100%;
	background-color: #a7a5a5;
	justify-content: space-evenly;
	align-items: center;
	display: flex;
`;
