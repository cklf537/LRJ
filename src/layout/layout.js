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
    }
}));


const Layout = () => {

    const classes = useStyles()

    return (
        <div>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Header />
                <SearchBar />
            </Grid>
            <Hidden mdUp>
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
            <Hidden>
            <Grid item xs={12} smDown>
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