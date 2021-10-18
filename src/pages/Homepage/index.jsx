import {
  Functions,
  HomeEvents,
  HomeTeam,
  Introduction,
  Vision,
  ExpertPanel,
  ResultPanel,
} from "containers/Homepage";
import styled from "styled-components";
import { appColors } from "styles/colors";

function Homepage() {
  return (
		<Container>
			<Introduction />
			<Vision />
			<Functions />
			<ExpertPanel />
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
