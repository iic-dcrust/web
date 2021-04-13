import Footer from "components/Homepage/Footer/Footer";
import Functions from "components/Homepage/Functions/Functions";
import Header from "components/Homepage/Header/Header";
import Introduction from "components/Homepage/Introduction/Introduction";
import Vision from "components/Homepage/Vision/Vision";

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