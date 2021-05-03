import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";
import { appColors } from "styles/colors";
import Links from "./Links/Links";

const Footer = () => {
  return (
    <Container>
      <Box>
        <Logo
          src="https://www.edufever.com/wp-content/uploads/2016/12/dcrust-logo.jpg"
          alt=""
        ></Logo>
      </Box>
      <Links />
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: ${appColors.primary};
  padding: ${getDeviceType() === "mobile" ? "25px" : "40px"};
  display: flex;
  justify-content: space-evenly;
`;
const Box = styled.div``;

const Logo = styled.img`
  width: ${getDeviceType() === "mobile" ? "65px" : ""};
`;
