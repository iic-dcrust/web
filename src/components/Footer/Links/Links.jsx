import { getDeviceType } from "helpers";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { appColors } from "styles/colors";

const Links = () => {
	const history = useHistory();
	return (
		<Container>
			<Column>
				<Head>Quick Links</Head>
				<Body>
					<Link onClick={() => history.push("/blogs")}>Blogs</Link>
					<Link onClick={() => history.push("/faq")}>FAQ's</Link>
					<Link onClick={() => history.push("/team")}>Our Team</Link>
					<Link onClick={() => history.push("/events")}>Events</Link>
				</Body>
			</Column>
			<Column>
				<Head>Quick Links</Head>
				<Body>
					<Link href="http://dcrustm.ac.in/">DCRUST Official</Link>
					<Link href="https://www.dcrustedp.in/">DCRUST EDP</Link>
					<Link href="https://mic.gov.in/innovation-council/iic">
						MIC India
					</Link>
				</Body>
			</Column>
			<Column>
				<Head>Contact us</Head>
				<Link href="https://www.facebook.com/Institute-Innovation-Council-Dcrust-102870201956938">
					IIC Facebook Page
				</Link>
			</Column>
		</Container>
	);
};

export default Links;

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex: ${getDeviceType() === "mobile" ? "1" : "0.85"};
`;

const Column = styled.div`
	color: ${appColors.footerText};
`;

const Head = styled.h4`
	margin-bottom: 20px;
	font-size: ${getDeviceType() === "mobile" ? "10px" : "20px"};
`;

const Body = styled.div`
	font-size: ${getDeviceType() === "mobile" ? "8px" : "16px"};
	color: ${appColors.footerText};
	display: flex;
	flex-direction: column;
`;

const Link = styled.a`
	color: ${appColors.footerText};
	text-decoration: none;
	font-size: ${getDeviceType() === "mobile" ? "8px" : ""};
	cursor: pointer;
	margin: 5px auto;

	:hover {
		color: ${appColors.footerHover};
	}
`;
