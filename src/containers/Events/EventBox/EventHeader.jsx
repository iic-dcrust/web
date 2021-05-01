import React from "react";
import styled from "styled-components";
import ComputerIcon from "@material-ui/icons/Computer";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CodeIcon from "@material-ui/icons/Code";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import { getDeviceType } from "helpers";
const EventHeader = () => {
  return (
    <>
      <Container>
        <Tag>
          <EventNoteIcon /> All
        </Tag>
        <Tag>
          <ComputerIcon /> Webinars
        </Tag>
        <Tag>
          <WebAssetIcon /> Workshops
        </Tag>
        <Tag>
          <CodeIcon /> Hackathons
        </Tag>
      </Container>
      <Cont>
        <Tag>All Time</Tag>
        <Tag>Upcoming</Tag>
        <Tag>Past</Tag>
      </Cont>
    </>
  );
};

export default EventHeader;
const Container = styled.div`
  flex: 1;
  width: 100%;
  justify-content: ${getDeviceType() === "desktop" ? "space-evenly" : ""};
  align-items: center;
  background-color: rgba(4, 0, 22, 0.87);
  display: flex;
  border-radius: 5px;
  overflow-x: scroll;
  font-size: ${getDeviceType() === "desktop" ? "20px" : "16px"};
  border-bottom: 1px solid rgba(4, 0, 22, 0.541);
`;
const Tag = styled.span`
  padding: 20px;
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  :hover {
    background-color: rgba(14, 149, 212, 0.918);
  }
`;

const Cont = styled.div`
  width: 100%;
  background-color: #a7a5a5;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
`;