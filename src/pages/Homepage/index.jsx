import { Functions, Introduction, Vision } from "containers/Homepage";
import { getDeviceType } from "helpers";

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
