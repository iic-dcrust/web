import { getDeviceType } from "helpers";
import React, { useState } from "react";
import styled from "styled-components";
import EventModal from "./EventModal";

const EventBox = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleOpen}
      >
        <Text style={{ display: `${hover ? "" : "none"}` }}>Event Title</Text>
      </Container>
      <EventModal open={open} handleClose={handleClose} />
    </>
  );
};

export default EventBox;

const Container = styled.div`
  height: 90%;
  background: url("https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  min-width: ${getDeviceType() === "mobile" ? "50vw" : "20vw"};
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(251, 251, 252, 0.726) 0px -3px 6px 2px inset;
  :hover {
    opacity: 0.85;
    transform: scale(0.96);
    transition-duration: 200ms;
  }
`;

const Text = styled.span`
  color: white;
  font-size: ${getDeviceType() === "mobile" ? "16px" : "22px"};
  font-weight: 500;
`;
