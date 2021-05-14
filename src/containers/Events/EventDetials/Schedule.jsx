import { Fade, Modal } from "@material-ui/core";
import { getDeviceType } from "helpers";
import React, { useState } from "react";
import styled from "styled-components";
import Backdrop from "@material-ui/core/Backdrop";
import { appColors } from "styles/colors";
import { Close } from "@material-ui/icons";

const Schedule = ({ data }) => {
	const [show, setShow] = useState(false);

	console.log(data);
	const handlePopoverOpen = () => {
		setShow(true);
	};

	const handlePopoverClose = () => {
		setShow(false);
	};
	let desc =
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

	return (
		<Container>
			<RowHead>
				<Cell>Time</Cell>
				<Cell>Event</Cell>
			</RowHead>
			{data &&
				data.map((item) => (
					<Box>
						<Row>
							<Cell>{item.text}</Cell>
							<EventCell onClick={handlePopoverOpen}>
								{item.shortText}
							</EventCell>
						</Row>
						<Modal
							aria-labelledby="transition-modal-title"
							aria-describedby="transition-modal-description"
							open={show}
							onClose={handlePopoverClose}
							closeAfterTransition
							BackdropComponent={Backdrop}
							BackdropProps={{
								timeout: 500,
							}}
						>
							<Fade in={show}>
								<HoverBox>
									<ModalHead>
										<h2>Details</h2>
										<Close
											onClick={handlePopoverClose}
											style={{ cursor: "pointer" }}
										/>
									</ModalHead>
									<p>{item.description}</p>
								</HoverBox>
							</Fade>
						</Modal>
					</Box>
				))}
		</Container>
	);
};

export default Schedule;

const Container = styled.div`
	padding: 6vh 8vw;
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const Box = styled.div`
	display: flex;
	align-items: center;
	padding-bottom: 10px;
	justify-content: center;
	width: 100%;
`;
const HoverBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 10px;
	padding: 20px;
	border: none;
	outline: none;
	margin: auto;
	margin-top: ${getDeviceType() === "mobile" ? "10vh" : "14vw"};
	width: ${getDeviceType() === "mobile" ? "80vw" : "40vw"};
	background-color: ${appColors.accentDark};
	color: #fafafa;
	text-align: justify;
`;
const ModalHead = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 20px;
`;

const Row = styled.div`
	width: 100%;
	display: flex;
	justify-content: ${getDeviceType() === "desktop"
		? "center"
		: "space-between"};
	margin-bottom: 10px;
	align-items: center;
	text-align: justify;
`;

const Cell = styled.span`
	font-size: 23px;
	font-family: Quicksand;
	flex: 0.35;
	color: ${appColors.accentDark};
`;

const EventCell = styled(Cell)`
	cursor: pointer;
	color: ${appColors.secondary};
	flex: ${getDeviceType() === "mobile" ? "0.55" : "0.35"};
	:hover {
		color: ${appColors.primary};
	}
`;
const RowHead = styled(Row)`
	font-weight: bold;
	margin-bottom: 25px;
`;
