import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";
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
  background-color: #040016;
  padding: ${getDeviceType() === "mobile" ? "25px" : "40px"};
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div``;

const Logo = styled.img`
  width: ${getDeviceType() === "mobile" ? "65px" : ""};
`;
