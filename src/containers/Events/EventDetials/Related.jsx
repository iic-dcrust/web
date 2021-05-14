import { CloudDownload } from "@material-ui/icons";
import { getDeviceType } from "helpers";
import React, { useState } from "react";
import styled from "styled-components";
import { appColors } from "styles/colors";

const Related = (props) => {
	const [active, setActive] = useState(false);

	return (
		<RelatedBox
			onMouseEnter={() => setActive(true)}
			onMouseLeave={() => setActive(false)}
		>
			<Download href={props.link}>
				<Cover active={active}>
					<Click
						style={{
							fontSize: "2rem",
							background: "white",
							borderRadius: "100%",
							padding: "5px",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%,-50%)",
						}}
					/>
				</Cover>
				<Body>{props.text}</Body>
			</Download>
		</RelatedBox>
	);
};

export default Related;
const Download = styled.a`
	color: white;
	text-decoration: none;
`;

const Click = styled(CloudDownload)`
	position: absolute;
	z-index: 101;
	color: ${appColors.accentLight};
`;

const Cover = styled.span`
	transition: all 0.3s;
	height: 40px;
	${(props) => (props.active ? "dispay:flex" : "display: none")};
`;

const Body = styled.p`
	margin-bottom: 15px;
	text-align: justify;
	padding: ${getDeviceType() === "mobile" ? "20px" : "35px"}; ;
`;

const RelatedBox = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
	color: ${appColors.bgVar3};
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	background-color: ${appColors.accentDark};
	transition: all 0.3s;
	cursor: pointer;
	position: relative;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	height: 100px;

	:hover {
		opacity: 0.7;
		transform: scale(1.051);
	}
`;
