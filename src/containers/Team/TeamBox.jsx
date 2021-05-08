import React, { useState } from "react";
import styled from "styled-components";
import { TeamData } from "helpers/Data";
import { getDeviceType } from "helpers";
import { appColors } from "styles/colors.js";
import TeamHeader from "./TeamHeader";

function TeamBox() {
  const [type, setType] = useState("all");
  return (
    <Container>
      <TeamHeader setType={setType} type={type} />
      <Box>
        {TeamData.map((item) => (
          <Person onClick={() => {}}>
            <Image src={item.image} />
            <Name>{item.name}</Name>
            <Work>{item.work}</Work>
          </Person>
        ))}
      </Box>
    </Container>
  );
}

export default TeamBox;

const Container = styled.div`
  width: "100%";
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  border: 1px solid rgba(4, 0, 22, 0.541);
  padding-bottom: 5px;
  border-radius: 10px;
  margin-bottom: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  background-color: ${appColors.bgVar3};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${appColors.primary};
  padding: 15px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
    background-color: rgba(0, 0, 0, 0.568);
  }
`;

const Name = styled.h3`
  padding-top: 10px;
  font-weight: 600;
`;
const Image = styled.img`
  height: ${getDeviceType() === "mobile" ? "100px" : "180px"};
  border-radius: 45% 10%;
`;
const Work = styled.h4`
  padding-bottom: 15px;
  font-weight: 500;
`;
