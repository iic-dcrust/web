import React, { useState } from "react";
import styled from "styled-components";
import { getDeviceType } from "helpers";
import { appColors } from "styles/colors";
import { LinkedIn, WhatsApp } from "@material-ui/icons";

const TeamDetails = ({ details }) => {
  const [active, setActive] = useState(true);

  return (
    <Person>
      <Image
        src={details.image}
        alt=""
        onMouseEnter={() => setActive(false)}
        onMouseLeave={() => setActive(true)}
        active={active}
      />
      <Icons
        active={active}
        onMouseEnter={() => setActive(false)}
        onMouseLeave={() => setActive(true)}
      >
        <a href={details.whatsapp}>
          <WhatsApp style={{ fontSize: "23px", color: "white" }} />
        </a>
        <a href={details.linkedin}>
          <LinkedIn style={{ fontSize: "23px", color: "white" }} />
        </a>
      </Icons>

      <Name>{details.name}</Name>
      <Work>{details.work}</Work>
    </Person>
  );
};

const Person = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${appColors.primary};
  padding: 15px;
`;

const Name = styled.h3`
  padding-top: 10px;
  font-weight: 600;
`;
const Image = styled.img`
  height: ${getDeviceType() === "mobile" ? "100px" : "180px"};
  border-radius: 45% 10%;
  opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.568);
  transition-duration: 0.3s;
  ${(props) => props.active && `opacity:1; transform: scale(0.8);`}
`;
const Work = styled.h4`
  padding-bottom: 15px;
  font-weight: 500;
`;

const Icons = styled.div`
  position: absolute;
  color: white;
  transform: scale(1.8);
  z-index: 1001;
  cursor: pointer;
  transition: all 0.3s;

  ${(props) => props.active && `display: none; `}
`;

export default TeamDetails;
