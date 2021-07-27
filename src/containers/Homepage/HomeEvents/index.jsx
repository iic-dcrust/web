// import { People } from "@material-ui/icons";
import { getDeviceType } from "helpers";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { appColors } from "styles/colors";
import { ArrowRight } from "@material-ui/icons";
import { useHistory } from "react-router";
import axios from "helpers/axios";
import EventBox from "containers/Events/EventBox/EventBox";
import NoData from "assets/nodata.svg";
import CircularProgress from "@material-ui/core/CircularProgress";
import Schedule from "containers/Events/EventDetials/Schedule";
import { ScheduleData } from "helpers/Data";

const HomeEvents = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    updateEventsList();
  }, []);

  const updateEventsList = () => {
    setLoading(true);
    axios
      .get(`/api/events?type=${"all"}&page=${1}&time=${"upcomming"}`)
      .then((res) => {
        setEvent(
          res.data.sort((x, y) => new Date(x.endTime) - new Date(y.endTime))[0]
        );
        setLoading(false);
      })
      .catch((err) => {
        setEvent(null);
        setLoading(false);
      });
  };

  return (
    <Container>
      <Head>UPCOMING EVENTS</Head>
      {loading ? (
        <CircularProgress style={{ margin: "150px auto" }} />
      ) : event ? (
        <EventBox event={event} key={event.id} />
      ) : (
        <NoDataImg src={NoData} alt=" " />
      )}
      <Head>SCHEDULE</Head>

      <Schedule data={ScheduleData} />
      <Button
        onClick={() => {
          history.push("/events");
          window.scrollTo(0, 0);
        }}
      >
        View More <ArrowRight />
      </Button>
    </Container>
  );
};

export default HomeEvents;

const Container = styled.div`
  padding: 10vh 22vw;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Head = styled.h1`
  color: ${appColors.homeText};
  font-size: ${getDeviceType() === "mobile" ? "28px" : "32px"};
  font-weight: 600;
  margin-bottom: ${getDeviceType() === "mobile" ? "50px" : "70px"};
  text-decoration: underline;
  text-decoration-color: ${appColors.homeDecor};
  text-underline-offset: 10px;
  text-align: center;
  padding: 35px 0;
`;

const Button = styled.button`
  background-color: ${appColors.bgVar3};
  outline: none;
  border: 1px solid ${appColors.homeDecor};
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  color: ${appColors.accentLight};
  border-radius: 15px;
  display: flex;
  align-items: center;
  max-width: 150px;
  :hover {
    color: ${appColors.bgVar3};
    background-color: ${appColors.accentLight};
    transition: all 0.35s;
  }
`;
const NoDataImg = styled.img`
  height: 200px;
  width: 200px;
  margin: 40px auto;
`;
