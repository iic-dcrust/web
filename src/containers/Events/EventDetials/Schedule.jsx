import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";
import ScheduleBox from "./ScheduleBox";

const Schedule = ({ data }) => {
  return (
    <Cover>
      <ScheduleBox data={data} />
      {/* <ScheduleBox data={data.slice(0, Math.round(data.length / 3))} /> */}
      {/* <ScheduleBox
        data={data.slice(
          Math.round(data.length / 3),
          Math.round(data.length / 3) * 2
        )}
      />
      <ScheduleBox data={data.slice(Math.round(data.length / 3) * 2)} /> */}
    </Cover>
  );
};

export default Schedule;

const Cover = styled.div`
  display: flex;
  flex-direction: ${getDeviceType() === "mobile" ? "column" : "row"};
`;
