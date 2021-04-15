import { Functions, Introduction, Vision } from "containers";

import styled from "styled-components";

function Homepage() {
  return (
    <Container>
      <Introduction />
      <Vision />
      <Functions />
    </Container>
  );
}

export default Homepage;

const Container = styled.div`
  background-color: #eeeded;
  height: 100%;
`;
