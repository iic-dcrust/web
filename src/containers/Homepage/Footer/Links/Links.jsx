import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";

const Links = () => {
  return (
    <Container>
      <Column>
        <Head>Quick Links</Head>
        <Body>
          <Link>Events</Link>
          <Link>Blogs</Link>
          <Link>FAQ's</Link>
          <Link>Our Team</Link>
        </Body>
      </Column>
      <Column>
        <Head>Quick Links</Head>
        <Body>
          <Link href="http://dcrustm.ac.in/">DCRUST Official</Link>
          <Link href="https://www.dcrustedp.in/">DCRUST EDP</Link>
          <Link href="https://mic.gov.in/innovation-council/iic">
            MIC India
          </Link>
        </Body>
      </Column>
      <Column>
        <Head>Contact us</Head>
        <Body>DCRUST University</Body>
      </Column>
    </Container>
  );
};

export default Links;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: ${getDeviceType() === "mobile" ? "1" : "0.85"};
`;

const Column = styled.div`
  color: gray;
`;

const Head = styled.h4`
  text-decoration: underline;
  margin-bottom: 20px;
  font-size: ${getDeviceType() === "mobile" ? "10px" : ""};
`;

const Body = styled.div`
  font-size: ${getDeviceType() === "mobile" ? "8px" : ""};
  color: gray;
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  color: gray;
  text-decoration: none;
  font-size: ${getDeviceType() === "mobile" ? "8px" : ""};
  :hover {
    color: lightgray;
  }
`;
