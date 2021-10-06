import React from "react";
import {InputLabel, 
MenuItem, 
FormControl, 
Select, 
TextField, 
Button,
Grid} from '@mui/material';
import style from "./BodyComponent.module.css";
const AddBlog = () => {
  const [blog, setBlogType] = React.useState('');
  const handleChange = (event) => {
    setBlogType(event.target.value);
  };
  return(
  <>
   <h2 className={style.dashboardHeading}>Add Blog</h2>
<div className={style.formBox}>
 
<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={blog}
          label="Select Category"
          onChange={handleChange}
        className={style.formField}>
          <MenuItem value="Agriculture">Agriculture</MenuItem>
          <MenuItem value="Education">Education</MenuItem>
          <MenuItem value="Healthcare">Healthcare</MenuItem>
        </Select>
        <TextField className={style.formField} id="outlined-basic" label="Blog Heading" variant="outlined"  />
        <TextField
          id="outlined-textarea"
          label="Blog Description"
          multiline
          className={style.formField}
        />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
       
        <Grid item xs={6}>
        <TextField className={style.formField} id="outlined-basic" label="Author Name" variant="outlined"  />

        </Grid>
        <Grid item xs={6}>
        <TextField id="outlined-basic"  variant="outlined" type="date" className={style.formField} />

        </Grid>
      </Grid>
      <TextField id="outlined-basic"  variant="outlined" type="file" className={style.formField} />
      <Button variant="contained" className={style.formBtn}>Add Blog</Button>

      </FormControl>
  </div>
  </>
  );
};
export default AddBlog;
