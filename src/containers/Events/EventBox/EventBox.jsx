import { getDeviceType } from "helpers";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const EventBox = ({ event }) => {
  const history = useHistory();
  const truncate = (desc, n) => {
    return desc.slice(0, n) + " ...";
  };
  let desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  return (
    <Container
      onClick={() => {
        history.push(`/events/${event.id}`);
        window.scrollTo(0, 0);
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
        alt=""
      ></Image>
      <Box>
        <Text>Event Title</Text>
        <Info>
          <Tag>
            <InfoHead>Starts on</InfoHead>
            <InfoBody>Start Time</InfoBody>
          </Tag>
          <Tag>
            <InfoHead>Venue</InfoHead>
            <InfoBody>DCRUST Campus</InfoBody>
          </Tag>
        </Info>
        <Body>{desc.length > 150 ? truncate(desc, 150) : desc}</Body>
      </Box>
    </Container>
  );
};

export default EventBox;

const Container = styled.div`
  height: 80vh;
  background-color: white;
  /* min-width: ${getDeviceType() === "mobile" ? "50vw" : "20vw"}; */
  margin: 10px;
  width: 95%;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.95;
    transform: scale(0.99);
    transition-duration: 200ms;
  }
`;

const Text = styled.span`
  color: #040016;
  font-size: ${getDeviceType() === "mobile" ? "18px" : "24px"};
  font-weight: 600;
`;

const Image = styled.img`
  max-height: 30vh;
  border-radius: inherit;
  width: 100%;
`;

const Box = styled.div`
  padding: 15px;
`;

const Info = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding-bottom: 15px;
  justify-content: space-between;
`;

const Tag = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
`;
const InfoHead = styled.span`
  color: gray;
  font-size: 12px;
`;
const InfoBody = styled.span`
  font-weight: 500;
  font-size: 14px;
`;

const Body = styled.div`
  text-align: justify;
  font-size: 14px;
  color: gray;
  padding: 10px 5px;
`;
