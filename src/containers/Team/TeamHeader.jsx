import React from "react";
import styled from "styled-components";
// import ComputerIcon from "@material-ui/icons/Computer";
// import EventNoteIcon from "@material-ui/icons/EventNote";
// import CodeIcon from "@material-ui/icons/Code";
// import WebAssetIcon from "@material-ui/icons/WebAsset";
import { getDeviceType } from "helpers";
import { appColors } from "styles/colors";

const TeamHeader = ({ type, setType }) => {
	return (
		<Container>
			<Tag
				onClick={() => {
					setType("all");
				}}
				active={type === "all"}
			>
				{/* <EventNoteIcon /> */}
				<span> All</span>
			</Tag>
			<Tag
				onClick={() => {
					setType("teacher");
				}}
				active={type === "teacher"}
			>
				{/* <ComputerIcon />  */}
				<span> Teachers Co-ordinators</span>
			</Tag>
			<Tag
				onClick={() => {
					setType("student-co");
				}}
				active={type === "student-co"}
			>
				{/* <WebAssetIcon />  */}
				<span> Student Co-ordinators</span>
			</Tag>
			<Tag
				onClick={() => {
					setType("members");
				}}
				active={type === "members"}
			>
				{/* <CodeIcon /> */}
				<span> Members</span>
			</Tag>
		</Container>
	);
};

export default TeamHeader;
const Container = styled.div`
	justify-content: ${getDeviceType() === "desktop" ? "space-evenly" : ""};
	align-items: center;
	background-color: ${appColors.accentDark};
	display: flex;
	border-radius: 5px;
	font-size: ${getDeviceType() === "desktop" ? "20px" : "16px"};
	border-bottom: ${appColors.accentDark};
	overflow-x: scroll;
	width: 100%;
	height: 100px;
	${getDeviceType() === "mobile" && `margin-top:60px;`}
`;
const Tag = styled.span`
	padding: 15px 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	color: white;
	cursor: pointer;
	width: 2000px;

	span {
		margin-left: 5px;
	}
	${(props) => props.active && `background-color: ${appColors.accentDark};`}

	:hover {
		background-color: ${appColors.accentDark};
	}
`;
