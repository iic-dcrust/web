import { Fade, Modal } from "@material-ui/core";
import { getDeviceType } from "helpers";
import React, { useState } from "react";
import styled from "styled-components";
import Backdrop from "@material-ui/core/Backdrop";
import { appColors } from "styles/colors";
import { Close } from "@material-ui/icons";

const Schedule = () => {
  const [show, setShow] = useState(false);

  const handlePopoverOpen = () => {
    setShow(true);
  };

  const handlePopoverClose = () => {
    setShow(false);
  };
  let desc =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <Container>
      {[1, 2, 3].map((item) => (
        <Box>
          <Icon>
            <span>Day {item}</span>
          </Icon>
          {[1, 2, 3, 5, 4, 6, 7].map((item) => (
            <>
              <Rule />
              <Info onClick={handlePopoverOpen}>Event</Info>
            </>
          ))}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={show}
            onClose={handlePopoverClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={show}>
              <HoverBox>
                <ModalHead>
                  <h2>Details</h2>
                  <Close
                    onClick={handlePopoverClose}
                    style={{ cursor: "pointer" }}
                  />
                </ModalHead>
                <p>{desc}</p>
              </HoverBox>
            </Fade>
          </Modal>
        </Box>
      ))}
    </Container>
  );
};

export default Schedule;

const Container = styled.div`
  padding: 6vh 8vw;
  overflow-x: scroll;
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
  color: white;
`;
const HoverBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  padding: 20px;
  border: none;
  outline: none;
  margin: auto;
  margin-top: ${getDeviceType() === "mobile" ? "10vh" : "20vw"};
  width: ${getDeviceType() === "mobile" ? "80vw" : "50vw"};
  background-color: ${appColors.accentDark};
  color: #fafafa;
  text-align: justify;
`;
const ModalHead = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Rule = styled.hr`
  background-color: ${appColors.secondary};
  min-width: 25px;
  max-width: 100px;
  height: 2px;
  margin: 0 10px;
  outline: none;
  border: none;
`;
const Icon = styled.span`
  padding: 20px 30px;
  border-radius: 30% 10%;
  background-color: ${appColors.accentDark};
`;

const Info = styled.span`
  padding: 20px 35px;
  border-radius: 30px;
  font-size: 24px;
  background-color: ${appColors.accentLight};
  cursor: pointer;
  :hover {
    background-color: ${appColors.primary};
  }
`;
