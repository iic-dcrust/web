import React, { useState } from "react";
import { getDeviceType } from "helpers";
import styled from "styled-components";
import { appColors } from "styles/colors";
import ScheduleModal from "./ScheduleModal";

const ScheduleBox = ({ data }) => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState(null);

  // console.log(data);
  const handlePopoverOpen = (item) => {
    setItem(item);
    setShow(true);
  };

  const handlePopoverClose = () => {
    setShow(false);
  };

  return (
    <Container>
      <RowHead>
        <Cell>Time</Cell>
        <Cell>Event</Cell>
      </RowHead>
      {data &&
        data.map((item) => (
          <Box>
            <Row>
              <Cell>{item.text}</Cell>
              <EventCell onClick={() => handlePopoverOpen(item)}>
                <Cell>Idea</Cell>
                <p>{item.shortText}</p>
                <br></br>
                <Cell>Team Leader</Cell>
                <p>{item.description}</p>
              </EventCell>
            </Row>
          </Box>
        ))}
      <ScheduleModal
        show={show}
        handlePopoverClose={handlePopoverClose}
        item={item}
      />
    </Container>
  );
};

export default ScheduleBox;

const Container = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  justify-content: center;
  width: 100%;
`;

const Row = styled.div`
  width: 100%;
  min-width: ${getDeviceType() === "desktop" ? "450px" : "300px"};
  display: flex;
  justify-content: ${getDeviceType() === "desktop"
    ? "center"
    : "space-between"};
  margin-bottom: 10px;
  align-items: center;
  /* text-align: justify; */
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
`;

const Cell = styled.span`
  font-size: 23px;
  font-family: Quicksand;
  flex: 0.35;
  color: ${appColors.accentDark};
`;

const EventCell = styled(Cell)`
  cursor: pointer;
  color: ${appColors.secondary};
  flex: ${getDeviceType() === "mobile" ? "0.55" : "0.35"};
  :hover {
    color: ${appColors.primary};
  }
`;
const RowHead = styled(Row)`
  font-weight: bold;
  margin-bottom: 25px;
`;
