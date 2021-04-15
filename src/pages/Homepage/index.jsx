import Footer from "containers/Footer";
import Functions from "containers/Functions";
import Header from "containers/Header";
import Introduction from "containers/Introduction";
import Vision from "containers/Vision";

import styled from "styled-components";

function Homepage() {
  return (
    <Container>
      <Header />
      <Introduction />
      <Vision />
      <Functions />
      <Footer />
    </Container>
  );
}

export default Homepage;

const Container=styled.div`
background-color:#eeeded;
height: 100%;

`