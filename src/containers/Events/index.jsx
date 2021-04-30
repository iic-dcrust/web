import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";
import EventBox from "./EventBox";

const Events = () => {
  return (
    <Container>
      <Mask>
        <Text>Event Calendar</Text>
      </Mask>
      <Image src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80" />
      <Upcoming>
        <Head>Upcoming Events</Head>
        <EventHolder>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
        </EventHolder>
        <Head>Past Events</Head>
        <EventHolder>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
        </EventHolder>
      </Upcoming>
    </Container>
  );
};

export default Events;

const Container = styled.div`
  width: ${getDeviceType() === "mobile" ? "100vw" : "80vw"};
  margin: 0 auto;
  padding-top: 70px;
`;
const Image = styled.img`
  width: 100%;
  max-height: 75vh;
`;
const Mask = styled.div`
  width: ${getDeviceType() === "mobile" ? "100vw" : "80vw"};
  height: ${getDeviceType() === "mobile" ? "40vh" : "75vh"};
  background-color: rgba(0, 0, 0, 0.699);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  color: #fff;
  font-size: ${getDeviceType() === "mobile" ? "1.5rem" : "3.5rem"};
  font-family: Quicksand;
`;

const Upcoming = styled.div`
  color: #040016;
  padding: 30px 0;
  overflow-x: hidden;
`;

const Head = styled.h1`
  font-family: Quicksand;
  font-size: ${getDeviceType() === "mobile" ? "28px" : "35px"};
  padding-left: 10px;
`;

const EventHolder = styled.div`
  height: 40vh;
  margin: 30px;
  overflow-x: scroll;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.055);
  display: flex;
  border-radius: 5px;
`;
