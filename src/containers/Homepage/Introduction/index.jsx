import { getDeviceType } from "helpers";
import React from "react";
import styled from "styled-components";
import IntroText from "./IntroText";
import { imageArray } from "./SliderData";
import SwiftSlider from "react-swift-slider";
import { appColors } from "styles/colors";

const Introduction = () => {
  return (
    <Container>
      <SwiftSlider
        data={imageArray}
        interval={3000}
        height={getDeviceType() === "mobile" ? "max-content" : ""}
        activeDotColor={appColors.primary}
      />
      <IntroText />
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  width: ${getDeviceType() === "mobile" ? "100vw" : "80vw"};
  margin: 0 auto;
  padding-top: 70px;
`;
