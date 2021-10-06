import React from "react";

import {InputLabel, MenuItem, FormControl, Select, TextField, Button} from '@mui/material';

import { Style } from "@material-ui/icons";
import style from "./BodyComponent.module.css";
const AddGalleryImages = () => {
  const [gallery, setGalleryType] = React.useState('');
  const handleChange = (event) => {
    setGalleryType(event.target.value);
  };
  return(
  <>
   <h2 className={style.dashboardHeading}>Add Gallery Images</h2>
<div className={style.formBox}>
 
<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Gallery Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gallery}
          label="Select Gallery Type"
          onChange={handleChange}
        className={style.formField}>
          <MenuItem value="Startups Workshop">Startups Workshop</MenuItem>
          <MenuItem value="Innovative Idea Challenge">Innovative Idea Challenge</MenuItem>
    
        </Select>
        <TextField className={style.formField} id="outlined-basic" label="Image Name" variant="outlined"  />
        <TextField id="outlined-basic"  variant="outlined" type="file" className={style.formField} />
        <Button variant="contained" className={style.formBtn}>Add Image</Button>

      </FormControl>
  </div>
  </>
  );
};
export default AddGalleryImages;
