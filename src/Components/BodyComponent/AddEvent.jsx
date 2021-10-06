import React from "react";
import {InputLabel, 
MenuItem, 
FormControl, 
Select, 
TextField, 
Button,
Grid} from '@mui/material';
import style from "./BodyComponent.module.css";
const AddEvent = () => {
  const [event, setEventType] = React.useState('');
  const handleChange = (event) => {
    setEventType(event.target.value);
  };
  return(
  <>
   <h2 className={style.dashboardHeading}>Add Event</h2>
<div className={style.formBox}>
 
<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Event Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={event}
          label="Select Gallery Type"
          onChange={handleChange}
        className={style.formField}>
          <MenuItem value="Workshops">Workshops</MenuItem>
          <MenuItem value="Webinars">Webinars</MenuItem>
          <MenuItem value="Hackathons">Hackathons</MenuItem>
        </Select>
        <TextField className={style.formField} id="outlined-basic" label="Event Name" variant="outlined"  />
        <TextField
          id="outlined-textarea"
          label="Event Description"
          multiline
          className={style.formField}
        />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <p>Start Date:</p>
        </Grid>
        <Grid item xs={6}>
          <p>End Date:</p>
        </Grid>
        <Grid item xs={6}>
        <TextField id="outlined-basic"  variant="outlined" type="date" className={style.formField} />

        </Grid>
        <Grid item xs={6}>
        <TextField id="outlined-basic"  variant="outlined" type="date" className={style.formField} />

        </Grid>
      </Grid>
      
      <TextField className={style.formField} id="outlined-basic" label="Venue" variant="outlined"  />
      <TextField className={style.formField} id="outlined-basic" label="Event Link" variant="outlined"  />
      <TextField id="outlined-basic"  variant="outlined" type="file" className={style.formField} />
      <Button variant="contained" className={style.formBtn}>Add Event</Button>

      </FormControl>
  </div>
  </>
  );
};
export default AddEvent;
