import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";
import { appColors } from "styles/colors";
import resultData from "./resultsdata";

import "./resultpanel.css";

const ResultPanel = () => {
  console.log(resultData);

  return (
    <Container>
      <Head>Results of Idea Challenge</Head>
      <div className="result-container">
        {resultData.map(({ name, leader, domains, members }, index) => (
          <>
            <div key={index} className="result">
              <h2 className="result-index">{index + 1}.</h2>
              <h3 className="result-heading">{name}</h3>
              <p className="result-lead">{leader}</p>
              <div className="result-members">
                {members.map((member) => (
                  <span className="result-member">{member}</span>
                ))}
              </div>
              <div className="result-domains">
                {domains.map((domain) => (
                  <span className="result-domain">{domain} </span>
                ))}
              </div>
            </div>
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
