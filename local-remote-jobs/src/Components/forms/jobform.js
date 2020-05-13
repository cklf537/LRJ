import React, { Component } from 'react'
import { 
  Paper, 
  Container, 
  TextField, 
  Button, 
  Radio, 
  FormLabel, 
  FormControlLabel, 
  RadioGroup, 
  FormControl, 
  Grid, 
  Typography,
  CircularProgress
} from '@material-ui/core';
import useStyles from "./poststyle";

const JobForm = ({ handelChange, handelSubmit, args }) => {
  const classes = useStyles();
  const postres = args.loading && args.loading ?  <CircularProgress /> : null;
  return (
    <Container className={classes.root} maxWidth="xl">
      <Paper>

        <form onSubmit={handelSubmit} className={classes.root} noValidate autoComplete="off" onSubmit={handelSubmit}  >
          <Typography variant="h4" gutterBottom >
            <div className={classes.heading}> Please fill in requirement details. </div>
          </Typography>
          
          <TextField id="title" label="Job Title*" placeholder="Job Title/Position" fullWidth margin="normal" onChange={handelChange} />
          <Grid item xs={12} sm={6} >
            <TextField id="company" label="Company Name*" placeholder="Company name" fullWidth margin="normal" onChange={handelChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file" >
              <Button variant="contained" color="primary" component="span">
                Upload Company Logo
              </Button>
            </label>
          </Grid>
          <div className={classes.radio}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Position Type</FormLabel>
              <RadioGroup row aria-label="position" name="position" id="position" onChange={handelChange} defaultValue="top">
                <FormControlLabel
                  value="100PercentRemote"
                  control={<Radio color="primary" />}
                  label="100% Remote"
                />
                <FormControlLabel
                  value="Contract"
                  control={<Radio color="primary" />}
                  label="Contract"
                />
                <FormControlLabel
                  value="Freelance"
                  control={<Radio color="primary" />}
                  label="Freelance"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <TextField id="category" label="Category*" placeholder="Software Engineer/Devops/UI developer etc..." fullWidth margin="normal" onChange={handelChange} />
          <TextField id="description" label="Job Description*" placeholder="Description can be in multiple lines..." fullWidth multiline margin="normal" onChange={handelChange} />
          <TextField id="requirement" label="Job Requirement*" placeholder="Description can be in multiple lines..." fullWidth multiline margin="normal" onChange={handelChange} />
          <Button variant="contained" color="primary" type="submit">
            Post job
        </Button>
        {postres}
        {args.error && args.error !== undefined ? <div>{args.error.message}</div> : null}
        </form>
      </Paper>
    </Container>
  )
}

export default JobForm;
