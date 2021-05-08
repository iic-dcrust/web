import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import TeamDetails from "./TeamDetails";
import { getDeviceType } from "helpers";

function TeamBox() {
  return (
    <Container>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <TeamDetails position="President" name="name" />
          <TeamDetails position="Member" name="name" />
        </Grid>
        <Grid item xs={3}>
          <TeamDetails position="Teacher Coordinator" name="name" />
          <TeamDetails position="Member" name="name" />
        </Grid>
        <Grid item xs={3}>
          <TeamDetails position="Teacher Coordinator" name="name" />
          <TeamDetails position="Member" name="name" />
        </Grid>
        <Grid item xs={3}>
          <TeamDetails position="Teacher Coordinator" name="name" />
          <TeamDetails position="Member" name="name" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default TeamBox;

const Container = styled.div`
  width: "100%";
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  border: 1px solid rgba(4, 0, 22, 0.541);
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;
