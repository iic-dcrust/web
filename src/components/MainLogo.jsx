import styled from "styled-components";
import DcrustLogo from "assets/dcrust-logo.jpeg";

export default function MainLogo() {
	return <Logo src={DcrustLogo} />;
}

const Logo = styled.img`
	height: 45px;
	align-self: center;
	border-radius: 10px;
	object-fit: cover;
`;
