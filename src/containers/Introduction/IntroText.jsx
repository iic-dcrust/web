import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";

const IntroText = () => {
  return (
    <Container>
      <Head>Institute Innovation Cell</Head>
      <Text>
        Ministry of Education (MoE), Govt. of India has established ‘MoE’s
        Innovation Cell (MIC)’ to systematically foster the culture of
        Innovation amongst all Higher Education Institutions (HEIs). The primary
        mandate of MIC is to encourage, inspire and nurture young students by
        supporting them to work with new ideas and transform them into
        prototypes while they are informative years.
      </Text>
      <Text>
        MIC has envisioned encouraging creation of ‘Institution’s Innovation
        Council (IICs)’ across selected HEIs. A network of these IICs will be
        established to promote innovation in the Institution through
        multitudinous modes leading to an innovation promotion eco-system in the
        campuses.
      </Text>
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
  color: #0e95d4;
  margin-bottom: 20px;
`;
const Text = styled.p`
  text-align: justify;
  margin-bottom: ${getDeviceType() === "mobile" ? "0" : "25px"};
  padding: ${getDeviceType() === "mobile" ? "20px" : ""};
  line-height: 1.5;
  font-size: ${getDeviceType() === "mobile" ? "15px" : "18px"};
  color: #242020;
  font-weight: 400;
`;
