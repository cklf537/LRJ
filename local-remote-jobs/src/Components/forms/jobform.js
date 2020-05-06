import React, { Component } from 'react'
import { Paper, Container, TextField, Button, Radio, FormLabel, FormControlLabel, RadioGroup, FormControl, Grid, Typography } from '@material-ui/core';
import useStyles from "./poststyle";

const JobForm = ({ handelChange, handelSubmit }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="xl">
      <Paper>

        <form onSubmit={handelSubmit} className={classes.root} noValidate autoComplete="off" onSubmit={handelSubmit}  >
          <div ><Typography variant="h4" gutterBottom className={classes.heading}>
            You post your requirement... we find the resource....
          </Typography>
          </div>
          <TextField id="position" label="Job Title*" placeholder="Job Title/Position" fullWidth margin="normal" onChange={handelChange} />
          <Grid item xs={12} sm={6} border>
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
              <RadioGroup row aria-label="position" name="position" id="position" defaultValue="top">
                <FormControlLabel
                  value="100PercentRemote"
                  control={<Radio color="primary" />}
                  label="100% Remote"
                  onChange={handelChange}
                />
                <FormControlLabel
                  value="Contract"
                  control={<Radio color="primary" />}
                  label="Contract"
                  onChange={handelChange}
                />
                <FormControlLabel
                  value="Freelance"
                  control={<Radio color="primary" />}
                  label="Freelance"
                  onChange={handelChange}
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
        </form>
      </Paper>
    </Container>
  )
}

export default JobForm;
