import { ArrowRight } from "@material-ui/icons";
import { getDeviceType } from "helpers";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { appColors } from "styles/colors";

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
      <Text>Event Title</Text>
      <Body>{desc.length > 300 ? truncate(desc, 300) : desc}</Body>
      <Box>
        <Info>
          <Tag>
            <InfoHead>Start:</InfoHead>
            <InfoBody>Start Time</InfoBody>
          </Tag>
          <Tag>
            <InfoHead>End:</InfoHead>
            <InfoBody>End Time</InfoBody>
          </Tag>
          <Tag>
            <InfoHead>Venue</InfoHead>
            <InfoBody>DCRUST / Online</InfoBody>
          </Tag>
        </Info>
      </Box>
      <Button>
        Register Here <ArrowRight />
      </Button>
    </Container>
  );
};

export default EventBox;

const Container = styled.div`
  height: 85vh;
  background-color: white;
  margin: 10px;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.15) 4px 4px 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.95;
    transform: scale(0.99);
    transition-duration: 200ms;
  }
`;

const Text = styled.span`
  color: ${appColors.primary};
  font-size: ${getDeviceType() === "mobile" ? "18px" : "24px"};
  font-weight: 600;
  padding: 15px;
`;

const Image = styled.img`
  max-height: 35vh;
  width: 100%;
`;

const Box = styled.div``;

const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const Tag = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  padding: 0 10px;
`;
const InfoHead = styled.span`
  color: ${appColors.footerText};
  font-size: 12px;
`;
const InfoBody = styled.span`
  font-weight: 500;
  font-size: 14px;
`;

const Body = styled.div`
  text-align: justify;
  font-size: 14px;
  color: ${appColors.footerText};
  padding: 15px 20px;
`;

const Button = styled.span`
  display: flex;
  margin-top: 15px;
  align-items: center;
  font-weight: 600;
  color: ${appColors.accentLight};
`;
