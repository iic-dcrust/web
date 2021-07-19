import { People } from "@material-ui/icons";
import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";
import { appColors } from "styles/colors";

const HomeEvents = () => {
  return (
    <Container>
      <Head>EVENT SCHEDULE</Head>

      {[0, 1, 2, 3].map((item) => (
        <Box>
          <Info>Date</Info>
          <Rule />
          <Icon>
            <People
              style={{ fontSize: "50px", color: `${appColors.accentLight}` }}
            />
          </Icon>
          <Rule />
          <Info>Event</Info>
        </Box>
      ))}
    </Container>
  );
};

export default HomeEvents;

const Container = styled.div`
  padding: 10vh 22vw;
`;
const Head = styled.h1`
  color: ${appColors.homeText};
  font-size: ${getDeviceType() === "mobile" ? "28px" : "32px"};
  font-weight: 600;
  margin-bottom: ${getDeviceType() === "mobile" ? "50px" : "70px"};
  text-decoration: underline;
  text-decoration-color: ${appColors.homeDecor};
  text-underline-offset: 10px;
  text-align: center;
  padding: 35px 0;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  justify-content: center;
`;

const Rule = styled.hr`
  background-color: ${appColors.secondary};
  width: 200px;
  height: 2px;
  margin: 0 10px;
  outline: none;
  border: none;
`;
const Icon = styled.span`
  padding: 10px 25px;
  border-radius: 30% 5%;
  background-color: ${appColors.bgVar3};
`;

const Info = styled.span`
  padding: 20px 35px;
  border-radius: 30px;
  font-size: 24px;
  background-color: ${appColors.bgVar3};
`;
