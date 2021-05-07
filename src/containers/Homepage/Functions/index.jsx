import { getDeviceType } from "helpers";
import { FunctionsData } from "helpers/Data";
import React from "react";
import styled from "styled-components";
import { appColors } from "styles/colors";

const Functions = () => {
  return (
    <Container>
      <Box>
        <Head>{FunctionsData.title}</Head>
        <Text>{FunctionsData.list1}</Text>
        <Text>{FunctionsData.list2}</Text>
      </Box>
    </Container>
  );
};

export default Functions;

const Container = styled.div`
  padding: 10vh 10vw;
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
  font-size: ${getDeviceType() === "mobile" ? "15px" : "19px"};
  color: ${appColors.homeText};
  font-weight: 400;
  text-align: justify;
  padding-bottom: 15px;
`;
