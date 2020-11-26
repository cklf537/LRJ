import { Box, Grid, Hidden, AppBar,Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import red from '@material-ui/core/colors/red';
import MoreIcon from '@material-ui/icons/MoreVert';
import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import "./header.css";

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        fontFamily: "'Oswald', sans-serif",
        fontWeight: "700",
        color: "#1D3557"
      },
      subTitle:{
        fontSize: "0.8rem"
      },
      typography: {
        color: "#A8DADC",
      }
}))


const Header = () => {
    
    const classes = useStyles();

    return (
         
        <div> 
        <Grid item className={classes.root}>
        <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
            <Hidden smUp>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            </Hidden>
          <Typography variant="h4" className={classes.title} color="white">
            Devcircle
            <Typography className={classes.subTitle}> 
                Your tech talk circle.
            </Typography>
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
        </Grid>
    </div>
    );
}

export default Header;