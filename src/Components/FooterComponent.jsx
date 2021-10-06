import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import style from './BodyComponent/BodyComponent.module.css';


export default function FooterComponent() {
  
  return (
    <Box className={style.footer}>
      <Grid container>
        <Grid item md={12} sm={6}>
          <Typography variant='body1' color='textSecondary' align='center' className={style.footerText}>
          @2021 All rights are reserved by Institute Innovation Cell. 
          </Typography>
        </Grid>
       
      </Grid>
    </Box>
  );
}
