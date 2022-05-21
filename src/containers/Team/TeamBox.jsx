import React, { useState } from "react";
import styled from "styled-components";
import { Select, InputLabel, MenuItem } from "@material-ui/core";
import { TeamData } from "helpers/Data";
// import { getDeviceType } from "../../helpers";
import { appColors } from "styles/colors.js";
import TeamHeader from "./TeamHeader";
import TeamDetails from "./TeamDetails";
import { getDeviceType } from "helpers";

function TeamBox() {
  const [type, setType] = useState("all");
  const [year, setYear] = useState("2022-2023");
  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Container>
      <TeamHeader setType={setType} type={type} />
      {type === "student-co" && (
        <SelectYear>
          {getDeviceType() === "desktop" && (
            <InputLabel id="demo-simple-select-label">Select Year</InputLabel>
          )}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            label="Select Year"
            onChange={handleChange}
            style={{ width: "20rem", height: "2.5rem", marginBottom: "3rem" }}
          >
            <MenuItem value="2022-2023">2022-2023</MenuItem>
            <MenuItem value="2021-2022">2021-2022</MenuItem>
          </Select>
        </SelectYear>
      )}
      <Box>
        <Info>
          {getDeviceType() === "mobile" ? "Tap" : "Hover"} on Images to Know
          More.
        </Info>

        {TeamData[type].map((item) => {
          if ((item.type = type)) {
            if (type != "student-co") {
              return <TeamDetails details={item} />;
            } else if (type === "student-co" && item.year === year) {
              return <TeamDetails details={item} />;
            }
          } else {
            return null;
          }
        })}
      </Box>
    </Container>
  );
}

export default TeamBox;

const Info = styled.span`
  position: absolute;
  top: 108px;
  left: 50%;
  transform: translateX(-50%);
  color: grey;
  font-weight: 400;
  font-size: 12px;
`;

const Container = styled.div`
  width: 100%;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  border: 1px solid rgba(173, 173, 173, 0.541);
  padding-bottom: 5px;
  border-radius: 10px;
  margin-bottom: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Box = styled.div`
  width: 100%;
  background-color: ${appColors.bgVar3};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 20px;
`;

const SelectYear = styled.div`
  width: ${getDeviceType() === "desktop" ? "20rem" : "10rem"};
  position: absolute !important;
  top: 108px !important;
  right: 10px;
  color: black !important;
  font-weight: 400;
  font-size: 12px;
`;
