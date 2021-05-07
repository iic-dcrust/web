import {
  Functions,
  HomeEvents,
  HomeTeam,
  Introduction,
  Vision,
} from "containers/Homepage";
import styled from "styled-components";
import { appColors } from "styles/colors";

function Homepage() {
  return (
    <Container>
      <Introduction />
      <Vision />
      <Functions />
      <HomeEvents />
      <HomeTeam />
    </Container>
  );
}

export default Homepage;

const Container = styled.div`
  background-color: ${appColors.bgVar1};
  height: 100%;
`;
