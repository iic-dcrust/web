import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styled from "styled-components";
import { Close } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const EventModal = ({ open, handleClose }) => {
  return (
    <Modal
      aria-labelledby="Event Modal"
      aria-describedby="Modal which describes the event"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 200,
      }}
    >
      <Fade in={open}>
        <Container>
          <Title>
            <Head>Event Title</Head>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Title>
          {/* <Box>
            <Image src="https://images.unsplash.com/photo-1484156818044-c040038b0719?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
          </Box> */}
        </Container>
      </Fade>
    </Modal>
  );
};

export default EventModal;
const Container = styled.div`
  width: 75vw;
  color: #040016;
  height: 80vh;
  outline-width: 0;
  background-color: rgba(62, 160, 206, 0.973);
  border-radius: 5px;
  padding: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const Head = styled.h2`
  font-family: Quicksand;
  font-size: 30px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const Box = styled.div`
  display: flex;
`;
