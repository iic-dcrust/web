import { getDeviceType } from "helpers";
import React, { useState } from "react";
import styled from "styled-components";
import LeftIcon from "@material-ui/icons/ChevronLeft";
import RightIcon from "@material-ui/icons/ChevronRight";
import Modal from "@material-ui/core/Modal";
import { Close } from "@material-ui/icons";

const Gallery = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (image) => {
    setOpen(true);
    setSelected(image.id);
  };
  const handleLeft = () => {
    const select = selected > 0 ? selected - 1 : images.length;
    setSelected(select);
  };
  const handleRight = () => {
    const select = selected < 12 ? selected + 1 : 1;
    setSelected(select);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };
  const body = (
    <ImgContainer>
      <Close
        style={{
          position: "absolute",
          zIndex: "101",
          right: 0,
          top: 0,
          padding: "5px",
          color: "salmon",
          cursor: "pointer",
        }}
        onClick={handleClose}
      />
      <Button type="left" onClick={handleLeft}>
        <LeftIcon
          style={{
            fontSize: "50px",
            padding: "10px",
            color: "salmon",
            cursor: "pointer",
          }}
        />
      </Button>
      <Button type="right" onClick={handleRight}>
        <RightIcon
          style={{
            fontSize: "50px",
            padding: "10px",
            color: "salmon",
            cursor: "pointer",
          }}
        />
      </Button>

      <ImgModal src={images.filter((image) => image.id === selected)[0]?.src} />
    </ImgContainer>
  );
  return (
    <>
      <ImageContainer>
        {images.map((image) => (
          <Img src={image.src} onClick={() => handleOpen(image)} />
        ))}
      </ImageContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};

export default Gallery;

const Image = styled.img`
  width: 100%;
  height: ${getDeviceType() === "mobile" ? "40vh" : "50vh"};
  object-fit: cover;
`;

const Img = styled(Image)`
  border-radius: 5px;
  max-width: 300px;
  max-height: 180px;
  margin: 35px 30px;
  cursor: pointer;
  object-fit: fill;
  :hover {
    opacity: 0.9;
    transform: scale(1.01);
    transition-duration: 200ms;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ImgModal = styled.img`
  margin: auto;
  object-fit: fill;
  width: ${getDeviceType() === "desktop" ? "60vw" : "90vw"};
  height: ${getDeviceType() === "desktop" ? "70vh" : "50vh"};
`;
const ImgContainer = styled.div`
  width: ${getDeviceType() === "desktop" ? "60vw" : "90vw"};
  height: ${getDeviceType() === "desktop" ? "70vh" : "50vh"};
  margin: auto;
  margin-top: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;
  outline: none;
`;
const Button = styled.button`
  height: 100%;
  margin: auto;
  cursor: pointer;
  position: absolute;
  ${(props) => (props.type === "left" ? "left:0;" : "right:0;")}
  background:transparent;
  border: none;
  outline: none;
`;
