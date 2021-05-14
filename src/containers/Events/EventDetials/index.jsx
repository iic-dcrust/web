import { getDeviceType } from "helpers";
import React, { useState, useEffect } from "react";
// import { useStateValue } from "helpers/StateProvider";
// import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { appColors } from "styles/colors";
import Related from "./Related";
import Schedule from "./Schedule";
import axios from "../../../helpers/axios";
import { useParams } from "react-router";

const EventDetails = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [details, setDeatils] = useState({});
  const [schedule, setSchedule] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const { eventId } = useParams();

  useEffect(() => {
    async function eventFunction() {
      try {
        let response = await axios.get("/api/events/" + eventId);
        setDeatils(response.data);
        let stime = new Date(response.data.startTime);
        let etime = new Date(response.data.endTime);
        stime = stime.toLocaleString("en-US");
        etime = etime.toLocaleString("en-US");
        setStartTime(stime);
        setEndTime(etime);
        setIsRegistered(response.data.eventRegistered);

        let arr = response.data.schedule.split(";");
        let res = [];
        for (let i = 0; i < arr.length; i += 3) {
          let temp = {
            text: arr[i],
            shortText: arr[i + 1],
            description: arr[i + 2],
          };
          res.push(temp);
        }
        setSchedule(res);

        let arr2 = response.data.attachedFiles.split(";");
        console.log(arr2);
        let res2 = [];
        for (let i = 0; i < arr2.length; i += 2) {
          let temp = {
            text: arr2[i],
            url: arr2[i + 1],
          };
          res2.push(temp);
        }
        console.log(res2);
        setAttachedFiles(res2);
      } catch (err) {
        if (err.response) {
          if (err.response.status === 400) {
            alert(err.response.data.error);
          } else if (err.response.status === 500) {
            alert("Internal Error");
          }
        } else {
          alert(err);
        }
      }
    }
    eventFunction();
  }, [eventId]);

  const registerEvent = async () => {
    try {
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          alert(err.response.data.error);
        } else if (err.response.status === 500) {
          alert("Internal Error");
        }
      } else {
        alert(err);
      }
    }
  };

  return (
    <Container>
      <Image src={details.mainImgUrl}></Image>
      <Box>
        <Head>{details.title}</Head>
        <Info>
          <Button
            onClick={() =>
              !isRegistered
                ? registerEvent()
                : window.open(details.joinLink, "_blank")
            }
          >
            {isRegistered ? "Join Now" : "Register"}
          </Button>
          <Tag>
            <InfoHead>Starts on:</InfoHead>
            <InfoBody>{startTime}</InfoBody>
          </Tag>
          <Tag>
            <InfoHead>Ends on:</InfoHead>
            <InfoBody>{endTime}</InfoBody>
          </Tag>
          <Tag>
            <InfoHead>Venue:</InfoHead>
            <InfoBody>{details.venue}</InfoBody>
          </Tag>
        </Info>
      </Box>
      <Box>
        <Desc>Description</Desc>
        <Body>{details.description}</Body>
      </Box>
      {details.schedule && (
        <Box>
          <Desc>Schedule</Desc>
          <Schedule data={schedule} />
        </Box>
      )}
      <Box>
        <Desc>Related Stuff</Desc>
        <Info>
          {attachedFiles &&
            attachedFiles.map((e) => {
              return <Related text={e.text} link={e.url} />;
            })}
        </Info>
      </Box>
    </Container>
  );
};

export default EventDetails;

const Container = styled.div`
  width: ${getDeviceType() === "mobile" ? "100vw" : "75vw"};
  margin: 100px auto;
  color: ${appColors.primary};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  background-color: #fafafa;
  padding: ${getDeviceType() === "mobile" ? "0" : "20px"};
  padding-top: 35px;
  border-radius: 10px;
`;
const Image = styled.img`
  width: 100%;
  max-height: 55vh;
  margin-bottom: 35px;
  object-fit: cover;
  border-radius: 10px;
`;

const Box = styled.div``;
const Head = styled.h1`
  font-family: Quicksand;
  font-size: ${getDeviceType() === "mobile" ? "25px" : "35px"};
  padding: 5px 10px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: ${getDeviceType() === "mobile" ? "column" : "row"};
  border-bottom: 1px solid lightgray;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: baseline;
  margin-top: 20px;
  padding: 5px 5px;
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
  margin-bottom: 10px;
`;

const Body = styled.p`
  margin-bottom: 15px;
  text-align: justify;

  padding: ${getDeviceType() === "mobile" ? "20px" : "35px"}; ;
`;
