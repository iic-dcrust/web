import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";
import { appColors } from "styles/colors";
import image1 from "../../assets/gallery/image1.jpeg";
import image2 from "../../assets/gallery/image2.jpeg";
import image3 from "../../assets/gallery/image3.jpeg";
import image4 from "../../assets/gallery/image4.jpeg";
import image5 from "../../assets/gallery/image5.jpeg";
import image6 from "../../assets/gallery/image6.jpeg";
import image7 from "../../assets/gallery/image7.jpeg";
import image8 from "../../assets/gallery/image8.jpeg";
import image9 from "../../assets/gallery/image9.jpeg";
import image10 from "../../assets/gallery/image10.jpeg";
import image11 from "../../assets/gallery/image11.jpeg";
import image12 from "../../assets/gallery/image12.jpeg";
import image13 from "../../assets/gallery/image13.jpeg";
import image14 from "../../assets/gallery/image14.jpeg";
import image15 from "../../assets/gallery/image15.jpeg";
import image16 from "../../assets/gallery/image16.jpeg";
import image17 from "../../assets/gallery/image17.jpeg";
import image18 from "../../assets/gallery/image18.jpeg";
import image19 from "../../assets/gallery/image19.jpeg";
import image20 from "../../assets/gallery/image20.jpeg";
import image21 from "../../assets/gallery/image21.jpeg";
import image22 from "../../assets/gallery/image22.jpeg";
import image23 from "../../assets/gallery/image23.jpeg";
import image24 from "../../assets/gallery/image24.jpeg";
import image25 from "../../assets/gallery/image25.jpeg";
import image26 from "../../assets/gallery/image26.jpeg";
import image27 from "../../assets/gallery/image27.jpeg";
import image28 from "../../assets/gallery/image28.jpeg";
import image29 from "../../assets/gallery/image29.jpeg";
import image30 from "../../assets/gallery/image30.jpeg";
import image31 from "../../assets/gallery/image31.jpg";
import image32 from "../../assets/gallery/image32.jpg";
import image33 from "../../assets/gallery/image33.jpeg";
import image34 from "../../assets/gallery/image34.jpeg";
import image35 from "../../assets/gallery/image35.jpeg";
import image36 from "../../assets/gallery/image36.jpeg";
import image37 from "../../assets/gallery/image37.jpeg";
import GalleryComponent from "../../containers/Gallery";

const Gallery = () => {
  const images = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 }
  ];
  const ideaImages = [
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
    { id: 10, src: image10 },
    { id: 11, src: image11 },
    { id: 12, src: image12 },
    { id: 13, src: image13 },
    { id: 14, src: image14 },
    { id: 15, src: image15 },
    { id: 16, src: image16 },
    { id: 17, src: image17 },
    { id: 18, src: image18 },
    { id: 19, src: image19 },
    { id: 20, src: image20 },
    { id: 21, src: image21 }
  ];
  const devprogramImages = [
    { id: 22, src: image22 },
    { id: 23, src: image23 },
    { id: 24, src: image24 },
    { id: 25, src: image25 },
    { id: 26, src: image26 },
    { id: 27, src: image27 },
    { id: 28, src: image28 },
    { id: 29, src: image29 },
    { id: 30, src: image30 }
  ];
  const patentImages = [
    { id: 31, src: image31 },
    { id: 32, src: image32 },
    { id: 33, src: image33 },
    { id: 34, src: image34 },
    { id: 35, src: image35 },
    { id: 36, src: image36 },
    { id: 37, src: image37 }
  ]

  return (
    <Container>
      <Mask>
        <Text>Image Gallery</Text>
      </Mask>
      <Image src="https://images.unsplash.com/photo-1616531770192-6eaea74c2456?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
      <Box>
        <EventHeader>
          <Tag>Workshop on Start-ups and Entrepreneurship</Tag>
        </EventHeader>
        <GalleryComponent images={images} />
        <EventHeader>
          <Tag>Idea Challenge</Tag>
        </EventHeader>
        <GalleryComponent images={ideaImages} />
        <EventHeader>
          <Tag>Entrepreneurship Development Programme</Tag>
        </EventHeader>
        <GalleryComponent images={devprogramImages} />
        <EventHeader>
          <Tag>Patent Expert Lecture</Tag>
        </EventHeader>
        <GalleryComponent images={patentImages} />
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
