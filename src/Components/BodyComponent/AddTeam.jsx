import React from "react";

import {InputLabel, MenuItem, FormControl, Select, TextField, Button,Grid} from '@mui/material';

import style from "./BodyComponent.module.css";
const AddTeam = () => {
  const [member, setMemberType] = React.useState('');
  const handleChange = (event) => {
    setMemberType(event.target.value);
  };
  return(
  <>
   <h2 className={style.dashboardHeading}>Add Team Member</h2>
<div className={style.formBox}>
 
<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Member Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={member}
          label="Select Member Type"
          onChange={handleChange}
        className={style.formField}>
          <MenuItem value="Teacher co-ordinator">Teacher co-ordinator</MenuItem>
          <MenuItem value="Student co-ordinator">Student co-ordinator</MenuItem>
          <MenuItem value="Members">Members</MenuItem>
    
        </Select>
        <TextField className={style.formField} id="outlined-basic" label="Member Name" variant="outlined"  />
        <TextField className={style.formField} id="outlined-basic" label="Member's Designation" variant="outlined"  />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       
        
        <Grid item xs={6}>
        <TextField className={style.formField} id="outlined-basic" label="LinkedIn Link" variant="outlined"  />

        </Grid>
        <Grid item xs={6}>
        <TextField className={style.formField} id="outlined-basic" label="Telegram Link" variant="outlined"  />

        </Grid>
      </Grid>
        
        <TextField id="outlined-basic"  variant="outlined" type="file" className={style.formField} />
        <Button variant="contained" className={style.formBtn}>Add Member</Button>

      </FormControl>
  </div>
  </>
  );
};
export default AddTeam;
