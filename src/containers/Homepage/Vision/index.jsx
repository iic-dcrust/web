import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";

const Vision = () => {
  return (
    <Container>
      <Box>
        <Head>VISION OF IIC</Head>
        <Content>
          <TextBox>
            <Text>
              Primarily, the IICs' role is to engage a large number of faculty
              and staff, and encourage, inspire, and nuture young students in
              various innovation and enterpreneurship-relaed activities such as
              ideation, problem-solving, proof of concept development, design
              thinking, IPR, project handling and management at
              pre-incubting/incubation stage, etc.,so that innovation and
              entrepreneurship ecosystem gets established and stabilized in
              HEIs.
            </Text>
          </TextBox>
          <Logo
            src="https://www.mic.gov.in/assets/img/iic-logo.png"
            alt=""
          ></Logo>
        </Content>
      </Box>
    </Container>
  );
};

export default Vision;

const Container = styled.div`
  background-color: #dddddd;
  padding: 10vh 10vw;
`;
const Head = styled.h2`
  color: #2e2c2c;
  font-size: ${getDeviceType() === "mobile" ? "28px" : "32px"};
  font-weight: 600;
  margin-bottom: ${getDeviceType() === "mobile" ? "50px" : "70px"};
  text-decoration: underline;
  text-decoration-color: #a09e9e;
  text-underline-offset: 10px;
  text-align: ${getDeviceType() === "mobile" ? "center" : ""};
`;

const Box = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: ${getDeviceType() === "mobile" ? "column" : "row"};
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.p`
  font-size: ${getDeviceType() === "mobile" ? "15px" : "18px"};
  padding-bottom: ${getDeviceType() === "mobile" ? "20px" : ""};
  color: #2e2c2c;
  font-weight: 400;
`;
const TextBox = styled.div`
  flex: 0.6;
  text-align: justify;
`;
const Logo = styled.img`
  height: max-content;
  width: ${getDeviceType() === "mobile" ? "100%" : "max-content"};
`;
