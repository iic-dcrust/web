import { CloudDownload } from "@material-ui/icons";
import { getDeviceType } from "helpers";
import React, { useState } from "react";
import styled from "styled-components";
import { appColors } from "styles/colors";

const Related = () => {
  const [active, setActive] = useState(false);
  let desc =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <RelatedBox
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Download href="https://drive.google.com/u/0/uc?id=1DrEpG4dQgKLmTHmB4ffQHavISp16EduX&export=download">
        <Cover active={active}>
          <Click
            style={{
              fontSize: "10rem",
              margin: "20px 40px",
            }}
          />
        </Cover>
        <Body>{desc.slice(0, 100)}</Body>
      </Download>
    </RelatedBox>
  );
};

export default Related;
const Download = styled.a`
  color: white;
  text-decoration: none;
`;

const Click = styled(CloudDownload)`
  position: absolute;
  z-index: 101;
  color: ${appColors.accentLight};
`;

const Cover = styled.span`
  transition: all 0.3s;
  ${(props) => (props.active ? "dispay:block" : "display: none")};
`;

const Body = styled.p`
  margin-bottom: 15px;
  text-align: justify;
  padding: ${getDeviceType() === "mobile" ? "20px" : "35px"}; ;
`;

const RelatedBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  color: ${appColors.bgVar3};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${appColors.accentDark};
  transition: all 0.3s;
  cursor: pointer;
  max-width: 240px;
  min-height: 240px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  :hover {
    opacity: 0.7;
    transform: scale(1.051);
  }
`;
