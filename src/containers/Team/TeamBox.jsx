import React from "react";
import styled from "styled-components";
import {Grid} from "@material-ui/core";
import TeamDetails from "./TeamDetails";
import {getDeviceType} from "helpers";

function TeamBox (){
    return(
        <Container>
			<Grid container spacing={0}>
			    <Grid item xs={3}>
			        <TeamDetails position ="President" name ="name" />
                    <TeamDetails position = "Member" name = "name" />
			    </Grid>
			    <Grid item xs={3}>
				    <TeamDetails position ="Teacher Coordinator" name ="name" />
				    <TeamDetails position = "Member" name = "name" />
			    </Grid>
                <Grid item xs={3}>
                    <TeamDetails position ="Teacher Coordinator" name ="name" />
                    <TeamDetails position = "Member" name = "name" />
                </Grid>
                <Grid item xs={3}>
                    <TeamDetails position ="Teacher Coordinator" name ="name" />
                    <TeamDetails position = "Member" name = "name" />
                </Grid>
			</Grid>
		</Container>
    );
    }

    export default TeamBox;

const Container = styled.div`
    padding-left:150px;
    width: ${getDeviceType() === "mobile" ? "100vw" : "83vw"};
    box-shadow: rgba(17, 17, 26, 0.25) 0px 3px 12px,
        rgba(17, 17, 26, 0.15) 0px 5px 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  padding-bottom: 20px;
`