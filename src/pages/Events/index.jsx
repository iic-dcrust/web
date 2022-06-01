import { Pagination } from "@material-ui/lab";
import { getDeviceType } from "helpers";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EventBox from "containers/Events/EventBox/EventBox";
import EventHeader from "containers/Events/EventBox/EventHeader";
import { appColors } from "styles/colors";
import axios from "helpers/axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import NoData from "assets/nodata.svg";

const Events = () => {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("all");
  const [time, setTime] = useState("upcomming");

  useEffect(() => {
    updateEventsList(page, type, time);
  }, [type, time, page]);

  useEffect(() => {
    setPage(1);
  }, [time, type]);

  const updateEventsList = (page, type, time) => {
    setLoading(true);
    axios
      .get(`/api/events?type=${type}&page=${page}&time=${time}`)
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setEvents(null);
        setLoading(false);
      });
  };

  return (
    <Container>
      <Mask>
        <Text>Event Calendar</Text>
      </Mask>
      <Image src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80" />
      <Box>
        <EventHeader
          time={time}
          type={type}
          setTime={setTime}
          setType={setType}
        />
        <EventWrapper>
          {loading ? (
            <CircularProgress style={{ margin: "150px auto" }} />
          ) : events && events.length !== 0 ? (
            events.map((e) => <EventBox event={e} key={e.id} />)
          ) : (
            <NoDataImg src={NoData} alt=" " />
          )}
        </EventWrapper>
        <Page
          count={10}
          page={page}
          onChange={(e, value) => {
            setPage(value);
          }}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default Events;

const NoDataImg = styled.img`
  height: 200px;
  width: 200px;
  margin: 90px auto;
`;

const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

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
  border: 1px solid ${appColors.footerHover};
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  overflow-x: hidden;
`;

const Page = styled(Pagination)`
  padding-top: 20px;
`;
