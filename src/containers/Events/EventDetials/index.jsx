import { getDeviceType } from "helpers";
import { useStateValue } from "helpers/StateProvider";
import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const EventDetails = () => {
  const location = useLocation();
  const [{ events }] = useStateValue();
  let desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

  const event = events.filter((e) => e.id == location.pathname.slice(8))[0];
  return (
    <Container>
      <Image src="https://images.unsplash.com/photo-1578775334692-756031b1121a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"></Image>
      <Box>
        <Head>Event Title</Head>
        <Info>
          <Button>Register</Button>
          <Tag>
            <InfoHead>Starts on</InfoHead>
            <InfoBody>Start Time</InfoBody>
          </Tag>
          <Tag>
            <InfoHead>Venue</InfoHead>
            <InfoBody>DCRUST Campus</InfoBody>
          </Tag>
        </Info>
      </Box>
      <Box>
        <Desc>Description</Desc>
        <Body>{desc}</Body>
        <Info>
          <Type>Webinar</Type>
        </Info>
      </Box>
    </Container>
  );
};

export default EventDetails;

const Container = styled.div`
  width: ${getDeviceType() === "mobile" ? "100vw" : "75vw"};
  margin: 0 auto;
  color: #040016;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  background-color: #fafafa;
  padding: ${getDeviceType() === "mobile" ? "0" : "20px"};
  padding-top: 70px;
`;
const Image = styled.img`
  width: 100%;
  max-height: 55vh;
  margin-bottom: 35px;
`;

const Box = styled.div``;
const Head = styled.h1`
  font-family: Quicksand;
  font-size: ${getDeviceType() === "mobile" ? "25px" : "35px"};
  padding: 5px 10px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: ${getDeviceType() === "mobile" ? "column-reverse" : "row"};
  border-bottom: 1px solid lightgray;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Tag = styled.div`
  display: flex;
  margin-top: 20px;
`;
const InfoHead = styled.span`
  color: gray;
  font-size: ${getDeviceType() === "mobile" ? "14px" : "16px"};
  margin-right: ${getDeviceType() === "mobile" ? "10px" : "20px"};
`;
const InfoBody = styled.span`
  font-weight: 500;
  font-size: ${getDeviceType() === "mobile" ? "16px" : "18px"};
`;
const Button = styled.button`
  font-size: 16px;
  margin-right: 10px;
  margin-top: 10px;

  outline: none;
  cursor: pointer;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  background-image: linear-gradient(
    to right,
    #040016,
    rgba(12, 136, 194, 0.945)
  );
  border: none;
  color: white;
  padding: 10px 25px;

  :hover {
    background-image: linear-gradient(
      to left,
      #040016,
      rgba(12, 136, 194, 0.945)
    );
  }
`;

const Desc = styled.h2`
  font-family: Quicksand;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const Body = styled.p`
  margin-bottom: 30px;
  text-align: justify;

  padding: ${getDeviceType() === "mobile" ? "20px" : "40px"}; ;
`;

const Type = styled.span`
  padding: 8px 17px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  border: 1px solid #040016;
  background-color: rgb(12, 136, 194);
  text-align: center;
`;
