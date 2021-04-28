import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";

const Functions = () => {
  return (
    <Container>
      <Box>
        <Head>FUNCTIONS OF IIC</Head>
        <Text>
          <li>To create a vibrant local innovation ecosystem.</li>
          <li>Start-up supporting Mechanism in HEIs.</li>
          <li>
            Prepare institute for Atal Ranking of Institutions on Innovation
            Achievements Framework.
          </li>
          <li>
            Establish Function Ecosystem for Scouting Ideas and Pre-incubation
            of Ideas.
          </li>
          <li>
            Develop better Cognitive Ability for Technology Students.To conduct
            various innovation and entrepreneurship-related activities
            prescribed by Central MIC in time bound fashion.
          </li>
          <li>Identify and reward innovations and share success stories.</li>
        </Text>
        <Text>
          <li>
            Organize periodic workshops/ seminars/ interactions with
            entrepreneurs, investors, professionals and create a mentor pool for
            student innovators.
          </li>
          <li>
            Network with peers and national entrepreneurship development
            organizations.
          </li>
          <li>
            Create an Institution’s Innovation portal to highlight innovative
            projects carried out by institution’s faculty and students.
          </li>
          <li>
            Organize Hackathons, idea competition, mini-challenges etc. with the
            involvement of industries.
          </li>
        </Text>
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
  color: #2e2c2c;
  font-size: ${getDeviceType() === "mobile" ? "28px" : "32px"};
  font-weight: 600;
  margin-bottom: 70px;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #a09e9e;
  text-underline-offset: 10px;
`;

const Text = styled.ul`
  font-size: ${getDeviceType() === "mobile" ? "15px" : "19px"};
  color: #2e2c2c;
  font-weight: 400;
  text-align: justify;
  margin-bottom: 30px;
`;
