import { getDeviceType } from "helpers";
import { VisionData } from "helpers/Data";
import React from "react";
import styled from "styled-components";
import { appColors } from "styles/colors";

const Vision = () => {
  return (
    <Container>
      <Box>
        <Head>{VisionData.title}</Head>
        <Content>
          <TextBox>
            <Text>{VisionData.body}</Text>
          </TextBox>
          <Logo src={VisionData.image} alt=""></Logo>
        </Content>
      </Box>
    </Container>
  );
};

export default Vision;

const Container = styled.div`
  background-color: ${appColors.bgVar2};
  padding: 10vh 10vw;
`;
const Head = styled.h2`
  color: ${appColors.homeText};
  font-size: ${getDeviceType() === "mobile" ? "28px" : "32px"};
  font-weight: 600;
  margin-bottom: ${getDeviceType() === "mobile" ? "50px" : "70px"};
  text-decoration: underline;
  text-decoration-color: ${appColors.homeDecor};
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
  color: ${appColors.homeText};
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
