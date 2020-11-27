import { Box, Grid, Hidden, AppBar, Toolbar, IconButton, Typography, Avatar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import red from '@material-ui/core/colors/red';
import MoreIcon from '@material-ui/icons/MoreVert';
import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import "./header.css";

const theme = createMuiTheme();



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    fontFamily: "'Oswald', sans-serif",
    fontWeight: "700",
    color: "#1D3557",
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.7rem'
    },
  },
  subTitle: {
    fontSize: "0.8rem",
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem'
    }
  },
  typography: {
    color: "red",
  },

}))


const Header = () => {

  const classes = useStyles();

  return (

    <div>
      <Grid item className={classes.root}>
        <div className={classes.root}>
          <AppBar position="static" elevation={0}>
            <Toolbar>
              <Hidden smUp>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Typography variant="h1" className={classes.title} color="white">
                Devcircle
            <Typography variant="h2" className={classes.subTitle}>
                  Your tech talk circle.
            </Typography>
              </Typography>
             
              <IconButton aria-label="display more actions" edge="end" color="inherit">
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} smUp /> */}
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} smDown />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
      </Grid>
    </div>
  );
}

export default Header;