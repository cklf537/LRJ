import { Grid, Hidden } from "@material-ui/core";
import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from "./header";
import Footer from "./footer";
import LeftContent from "./left-content";
import MiddleContent from "./middle-content";
import RightContent from "./right-content";
import SearchBar from "./searh-bar";

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow: 1,
    },
    mainLayout:{
        marginRight:"1rem",
        marginLeft:"1rem",
        [theme.breakpoints.up('sm')]:{
            marginRight: "2rem",
            marginLeft: "2rem",
        }
    }
}));


const Layout = () => {

    const classes = useStyles()

    return (
        <div className={classes.mainLayout}>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} >
                <Header />
                <SearchBar />
            </Grid>
            <Hidden smDown>
            <Grid item xs={2}>
                <LeftContent />
            </Grid>
            <Grid item xs={7}>
                <MiddleContent />
            </Grid>
            <Grid item xs={3}>
                <RightContent />
            </Grid>
            </Hidden>
            <Hidden smUp> 
            <Grid item xs={12} >
                <MiddleContent />
            </Grid>
            </Hidden>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    </div>
    )

}

export default Layout;