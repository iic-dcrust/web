import React, { useState } from "react";
import styled from "styled-components";
import { getDeviceType } from "helpers";
import { appColors } from "styles/colors";
import { LinkedIn, WhatsApp } from "@material-ui/icons";

const TeamDetails = ({ details }) => {
	const [active, setActive] = useState(true);

	return (
		<Person
			onMouseEnter={() => {
				getDeviceType() === "desktop" && setActive(false);
			}}
			onMouseLeave={() => {
				getDeviceType() === "desktop" && setActive(true);
			}}
			onClick={() => {
				getDeviceType() === "mobile" && setActive((prev) => !prev);
			}}
		>
			<Image src={details.image} alt="" active={active} />
			<Icons active={active}>
				<a href={details.whatsapp}>
					<WhatsApp
						style={{
							fontSize: "17px",
							color: "#19d03e",
							marginTop: "10px",
							marginRight: "10px",
						}}
					/>
				</a>
				<a href={details.linkedin}>
					<LinkedIn
						style={{
							marginTop: "10px",
							fontSize: "17px",
							color: "#0075b3",
						}}
					/>
				</a>
			</Icons>

			<Name acitve={active}>{details.name}</Name>
			<Work active={active}>{details.work}</Work>
		</Person>
	);
};

const Person = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${appColors.primary};
	padding: 15px 30px;
	margin: 30px 30px;
	transform: translateY(-10px);
`;

const Name = styled.h3`
	padding-top: 20px;
	font-weight: 600;
	transform: translateY(10px);
	transition-duration: 0.3s;
	opacity: 1;
	${(props) => props.active && `opacity:0;`}
`;
const Image = styled.img`
	height: ${getDeviceType() === "mobile" ? "100px" : "100px"};
	width: 100px;
	border-radius: 100%;
	opacity: 0.5;
	background-color: rgba(0, 0, 0, 0.568);
	transition-duration: 0.3s;
	transform: translateY(-20px);
	z-index: 97;
	object-fit: cover;
	${(props) =>
		props.active && `opacity:1; transform: scale(1.6) translateY(39px);`}
`;
const Work = styled.h4`
	padding-bottom: 15px;
	font-weight: 500;
	transform: translateY(10px);
	opacity: 1;
	transition-duration: 0.3s;
	${(props) => props.active && `opacity:0;`}
`;

const Icons = styled.div`
	position: absolute;
	color: white;
	transform: scale(1.7) translateY(10px);
	z-index: 99;
	cursor: pointer;
	transition: all 0.3s;
	opacity: 1;
	${(props) => props.active && `display: none; opacity:0;`}
`;

export default TeamDetails;
