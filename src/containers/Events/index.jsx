import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { getDeviceType } from "helpers";
import { useStateValue } from "helpers/StateProvider";
import React from "react";
import styled from "styled-components";
import EventBox from "./EventBox/EventBox";
import EventHeader from "./EventBox/EventHeader";

const Events = () => {
  const [{ events }] = useStateValue();
  return (
    <Container>
      <Mask>
        <Text>Event Calendar</Text>
      </Mask>
      <Image src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80" />
      <Box>
        <EventHeader />
        <Grid container spacing={0}>
          {events.map((event) => (
            <Grid item sm={4} xs={12} key={event.id}>
              <EventBox event={event} />
            </Grid>
          ))}
        </Grid>

        <Page count={10} color="primary" />
      </Box>
    </Container>
  );
};

export default Events;

const Container = styled.div`
  width: ${getDeviceType() === "mobile" ? "100vw" : "75vw"};
  margin: 0 auto;
  background-color: #f5f5f5;
  padding-top: 70px;
`;
const Image = styled.img`
  width: 100%;
  height: ${getDeviceType() === "mobile" ? "40vh" : "50vh"};
`;
const Mask = styled.div`
  width: ${getDeviceType() === "mobile" ? "100vw" : "75vw"};
  height: ${getDeviceType() === "mobile" ? "40vh" : "50vh"};
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

const Box = styled.div`
  width: ${getDeviceType() === "mobile" ? "100vw" : "75vw"};
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  border: 1px solid rgba(4, 0, 22, 0.541);
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

const Page = styled(Pagination)`
  padding-top: 20px;
`;
