import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";
import { appColors } from "styles/colors";
import { IntroData } from "helpers/Data";

const IntroText = () => {
  return (
    <Container>
      <Head>{IntroData.title}</Head>
      <Text>{IntroData.p1}</Text>
      <Text>{IntroData.p2}</Text>
    </Container>
  );
};

export default IntroText;

const Container = styled.div`
  padding-bottom: 50px;
  margin-top: 55px;
`;

const Head = styled.h2`
  text-align: center;
  font-size: ${getDeviceType() === "mobile" ? "22px" : "27px"};
  color: ${appColors.secondary};
  margin-bottom: 20px;
`;
const Text = styled.p`
  text-align: justify;
  margin-bottom: ${getDeviceType() === "mobile" ? "0" : "25px"};
  padding: ${getDeviceType() === "mobile" ? "20px" : ""};
  line-height: 1.5;
  font-size: ${getDeviceType() === "mobile" ? "15px" : "18px"};
  color: ${appColors.homeText};
  font-weight: 400;
`;
