import React from "react";

import { Fade, Modal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import { Close } from "@material-ui/icons";

import { getDeviceType } from "helpers";
import styled from "styled-components";
import { appColors } from "styles/colors";

const ScheduleModal = ({ show, handlePopoverClose, item }) => {
  return (
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
            <Close onClick={handlePopoverClose} style={{ cursor: "pointer" }} />
          </ModalHead>
          <ModalRow>
            <span>Slot</span>
            {item?.text}
          </ModalRow>
          <ModalRow>
            <span>Idea</span>
            {item?.shortText}
          </ModalRow>
          <ModalRow>
            <span>Team Leader</span>
            {item?.description}
          </ModalRow>
          <ModalRow>
            <span>Domain</span>
            {item?.domain}
          </ModalRow>
        </HoverBox>
      </Fade>
    </Modal>
  );
};

export default ScheduleModal;
const HoverBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  padding: 20px;
  border: none;
  outline: none;
  margin: auto;
  margin-top: ${getDeviceType() === "mobile" ? "30vh" : "14vw"};
  width: ${getDeviceType() === "mobile" ? "80vw" : "40vw"};
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

const ModalRow = styled(ModalHead)`
  width: ${getDeviceType() === "mobile" ? "100%" : "70%"};
  text-align: right;
`;
