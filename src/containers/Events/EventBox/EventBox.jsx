import { ArrowRight } from "@material-ui/icons";
import { getDeviceType } from "helpers";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { appColors } from "styles/colors";
import moment from "moment";

const EventBox = ({ event }) => {
  const history = useHistory();
  const truncate = (description, n) => {
    return description.slice(0, n) + " ...";
  };
  return (
    <Container
      onClick={() => {
        history.push(`/events/${event.id}`);
        window.scrollTo(0, 0);
      }}
    >
      <Image src={event.mainImgUrl} alt=""></Image>
      <Text>{event.title}</Text>
      <Body>
        {event.description.length > 300
          ? truncate(event.description, 300)
          : event.description}
      </Body>
      <Box>
        <Info>
          <Tag>
            <InfoHead>Start:</InfoHead>
            <InfoBody>{moment(event.startTime).format("DD-MM-YYYY")}</InfoBody>
          </Tag>
          <Tag>
            <InfoHead>End:</InfoHead>
            <InfoBody>{moment(event.endTime).format("DD-MM-YYYY")}</InfoBody>
          </Tag>
          <Tag>
            <InfoHead>Venue</InfoHead>
            <InfoBody>{event.venue}</InfoBody>
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
  height: 550px;
  background-color: white;
  margin: 30px 40px;
  width: ${getDeviceType() === "mobile" ? "80vw" : "400px"};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding-bottom: 20px;

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
  max-height: 10%;
`;

const Image = styled.img`
  max-height: 50%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  object-fit: cover;
`;

const Box = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

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
  text-align: center;
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
  max-height: 20%;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Button = styled.span`
  display: flex;
  margin-top: 15px;
  align-items: center;
  font-weight: 600;
  color: ${appColors.accentLight};
`;
