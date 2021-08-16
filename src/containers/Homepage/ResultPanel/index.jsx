import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";
import { appColors } from "styles/colors";
import resultData from "./resultsdata";

const ResultPanel = () => {
  return (
    <Container>
      <Head>Results of Idea Challenge</Head>
      <div>
        {resultData.map(({ name, leader, domains, members }, index) => (
          <>
            <Result key={index}>
              <Index>{index + 1}.</Index>
              <Heading>{name}</Heading>
              <TeamLeader>{leader}</TeamLeader>
              <TeamMembers>
                {members.map((member) => (
                  <TeamMember>{member}</TeamMember>
                ))}
              </TeamMembers>
              <Domains>
                {domains.map((domain) => (
                  <Domain>{domain} </Domain>
                ))}
              </Domains>
            </Result>
          </>
        ))}
      </div>
    </Container>
  );
};

export default ResultPanel;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vh 10vw;
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
  padding: 0 0;
`;
const Result = styled.div`
  background-color: #f3f3f5;
  margin-bottom: 2rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Index = styled.h2`
  font-size: ${getDeviceType() === "mobile" ? "2em" : "3em"};
  font-weight: 800;
  z-index: 1;
  opacity: 0.1;
`;
const Heading = styled.h3`
  font-size: ${getDeviceType() === "mobile" ? "1.2rem" : "1.4rem"};
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;
const TeamLeader = styled.p`
  font-size: ${getDeviceType() === "mobile" ? "1rem" : "1.1rem"};
  font-weight: 500;
  color: #567;
  margin-bottom: 1rem;
`;
const TeamMembers = styled.div`
  margin-bottom: 1.3rem;
`;
const TeamMember = styled.span`
  color: #666;
  font-size: ${getDeviceType() === "mobile" ? ".9rem" : "1rem"};

  &:not(:last-child)::after {
    content: ", ";
  }
`;
const Domains = styled.div`
  display: flex;
`;
const Domain = styled.span`
  font-size: ${getDeviceType() === "mobile" ? "0.8rem" : "0.9rem"};
  background-color: #bde1f1;
  border-radius: 100px;
  color: #0489c7;
  padding: 2px 20px;

  &:not(:last-child) {
    margin-right: ${getDeviceType() === "mobile" ? "8px" : "10px"};
  }
`;
