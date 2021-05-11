import { getDeviceType } from "helpers";
import React, { useState } from "react";
// import { useStateValue } from "helpers/StateProvider";
// import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { appColors } from "styles/colors";

const EventDetails = () => {
  //   const location = useLocation();
  //   const [{ events }] = useStateValue();
  const [isPast] = useState(true);
  let desc =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  // const event = events.filter((e) => e.id === location.pathname.slice(8))[0];
  return (
    <Container>
      <Image src="https://images.unsplash.com/photo-1578775334692-756031b1121a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"></Image>
      <Box>
        <Head>Event Title</Head>
        <Info>
          <Button>Register</Button>
          <Tag>
            <InfoHead>Starts on:</InfoHead>
            <InfoBody>
              18<sup>th</sup> May, 2021
            </InfoBody>
          </Tag>
          <Tag>
            <InfoHead>Ends on:</InfoHead>
            <InfoBody>
              19<sup>th</sup> May, 2021
            </InfoBody>
          </Tag>
          <Tag>
            <InfoHead>Venue:</InfoHead>
            <InfoBody>Online</InfoBody>
          </Tag>
        </Info>
      </Box>
      <Box>
        <Desc>Description</Desc>
        <Body>{desc}</Body>
      </Box>
      <Box>
        <Desc>Schedule</Desc>
        <Body>
          <Sessions>
            <strong>Session 1</strong> : Lecture by Expert Speakers at 10:30
            a.m.
          </Sessions>

          <Sessions>
            <strong>Session 2</strong> : Lecture by Expert Speakers at 03:00
            p.m.
          </Sessions>
        </Body>
      </Box>
      <Box>
        <Desc>Related Stuff</Desc>

        <Info>
          {isPast && (
            <Type>
              <Download href="https://drive.google.com/u/0/uc?id=1DrEpG4dQgKLmTHmB4ffQHavISp16EduX&export=download">
                Event Record
              </Download>
            </Type>
          )}
          <Type>
            <Download href="https://drive.google.com/u/0/uc?id=1DrEpG4dQgKLmTHmB4ffQHavISp16EduX&export=download">
              Poster
            </Download>
          </Type>
          <Type>
            <Download href="https://drive.google.com/u/0/uc?id=1DrEpG4dQgKLmTHmB4ffQHavISp16EduX&export=download">
              Details
            </Download>
          </Type>
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
  padding-top: 70px;
  border-radius: 10px;
`;
const Image = styled.img`
  width: 100%;
  max-height: 55vh;
  margin-bottom: 35px;
`;

const Box = styled.div``;
const Sessions = styled.p`
  margin-bottom: 20px;
`;
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
  margin-bottom: 10px;
`;

const Body = styled.p`
  margin-bottom: 30px;
  text-align: justify;

  padding: ${getDeviceType() === "mobile" ? "20px" : "35px"}; ;
`;

const Type = styled.span`
  padding: 8px 17px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  border: 1px solid ${appColors.primary};
  background-color: rgb(12, 136, 194);
  text-align: center;
  :hover {
    background-color: ${appColors.primary};
  }
  margin-bottom: 10px;
`;

const Download = styled.a`
  color: white;
  text-decoration: none;
`;
