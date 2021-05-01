import React from "react";
import styled from "styled-components";

const Team = () => {
	return (
		<Container>
			<Image
				src="https://static.wixstatic.com/media/bcb517_3c2b91ce63d942bc86ff5250060eb36d~mv2.gif"
				alt=""
			/>
		</Container>
	);
};

export default Team;

const Container = styled.div`
	padding-top: 70px;
	text-align: center;
`;

const Image = styled.img`
	margin-top: 30px;
`;
