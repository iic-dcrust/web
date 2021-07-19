import { getDeviceType } from "helpers";
import { PanelData } from "helpers/Data";
import React from "react";
import styled from "styled-components";
import { appColors } from "styles/colors";

const ExpertPanel = () => {
  return (
    <Container>
      <Box>
        <Head>{PanelData.title}</Head>
        <Text>{PanelData.list1}</Text>
      </Box>
    </Container>
  );
};

export default ExpertPanel;

const Container = styled.div`
  padding: 10vh 10vw;
  background-color: ${appColors.bgVar2};
`;
const Box = styled.div``;
const Head = styled.h2`
  color: ${appColors.homeText};
  font-size: ${getDeviceType() === "mobile" ? "28px" : "32px"};
  font-weight: 600;
  margin-bottom: 70px;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ${appColors.homeDecor};
  text-underline-offset: 10px;
`;

const Text = styled.ul`
  font-size: ${getDeviceType() === "mobile" ? "15px" : "22px"};
  color: ${appColors.homeText};
  font-weight: 400;
  text-align: justify;
  line-height: 1.7;
  padding-bottom: 15px;
`;
