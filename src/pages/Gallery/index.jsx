import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";
import { appColors } from "styles/colors";
import image1 from "../../assets/gallery/image1.jpeg";
import image2 from "../../assets/gallery/image2.jpeg";
import image3 from "../../assets/gallery/image3.jpeg";
import image4 from "../../assets/gallery/image4.jpeg";
import image5 from "../../assets/gallery/image5.jpeg";
import GalleryComponent from "../../containers/Gallery";

const Gallery = () => {
  const images = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
  ];

  return (
    <Container>
      <Mask>
        <Text>Image Gallery</Text>
      </Mask>
      <Image src="https://images.unsplash.com/photo-1616531770192-6eaea74c2456?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
      <Box>
        <EventHeader>
          <Tag>Workshop on Start-ups and Enterpreneurship</Tag>
        </EventHeader>
        <GalleryComponent images={images} />
      </Box>
    </Container>
  );
};

export default Gallery;
const Container = styled.div`
  width: ${getDeviceType() === "mobile" ? "100vw" : "75vw"};
  margin: 0 auto;
  background-color: ${appColors.bgVar3};
  padding-top: 70px;
`;
const Image = styled.img`
  width: 100%;
  height: ${getDeviceType() === "mobile" ? "40vh" : "50vh"};
  object-fit: cover;
`;
const Mask = styled.div`
  width: ${getDeviceType() === "mobile" ? "100vw" : "75vw"};
  height: ${getDeviceType() === "mobile" ? "40vh" : "50vh"};
  background-color: rgba(0, 0, 0, 0.699);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  color: #fff;
  font-size: ${getDeviceType() === "mobile" ? "1.5rem" : "3.5rem"};
  font-family: Quicksand;
`;
const Box = styled.div`
  width: ${getDeviceType() === "mobile" ? "100vw" : "75vw"};
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  border: 1px solid ${appColors.footerHover};
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 10px;

  padding-bottom: 20px;
  overflow-x: hidden;
`;

const EventHeader = styled.div`
  flex: 1;
  width: 100%;
  justify-content: ${getDeviceType() === "desktop" ? "space-evenly" : ""};
  align-items: center;
  background-color: ${appColors.accentDark};
  display: flex;
  border-radius: 0 5px 5px 0;
  font-size: ${getDeviceType() === "desktop" ? "20px" : "16px"};
  border-bottom: ${appColors.accentDark};
  margin-bottom: 15px;
  text-align: center;
`;

const Tag = styled.span`
  padding: 15px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: white;

  :hover {
    background-color: ${appColors.accentDark};
  }
`;
