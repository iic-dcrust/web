import React from "react";
import styled from "styled-components";
import ComputerIcon from "@material-ui/icons/Computer";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CodeIcon from "@material-ui/icons/Code";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import { getDeviceType } from "helpers";
import { appColors } from "styles/colors";

const EventHeader = ({ setType, setTime, time, type }) => {
	return (
		<>
			<Container>
				<Tag
					onClick={() => {
						setType("all");
					}}
					active={type === "all"}
				>
					<EventNoteIcon />
					<span> All</span>
				</Tag>
				<Tag
					onClick={() => {
						setType("webinar");
					}}
					active={type === "webinar"}
				>
					<ComputerIcon /> <span> Webinars</span>
				</Tag>
				<Tag
					onClick={() => {
						setType("workshop");
					}}
					active={type === "workshop"}
				>
					<WebAssetIcon /> <span> Workshops</span>
				</Tag>
				<Tag
					onClick={() => {
						setType("hack");
					}}
					active={type === "hack"}
				>
					<CodeIcon />
					<span> Hackathons</span>
				</Tag>
			</Container>
			<Cont>
				<Tag
					onClick={() => {
						setTime("all");
					}}
					active={time === "all"}
				>
					All Time
				</Tag>
				<Tag
					onClick={() => {
						setTime("upcomming");
					}}
					active={time === "upcomming"}
				>
					Upcoming
				</Tag>
				<Tag
					onClick={() => {
						setTime("past");
					}}
					active={time === "past"}
				>
					Past
				</Tag>
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
	${(props) => props.active && `background-color: ${appColors.accentDark};`}

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
