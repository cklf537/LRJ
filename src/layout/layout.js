import { Grid, Hidden } from "@material-ui/core";
import React, { Component } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from "./header";
import Footer from "./footer";
import LeftContent from "./left-content";
import MiddleContent from "./middle-content";
import RightContent from "./right-content";

const Layout = () => {

    return (
        <div>
        <Grid container>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={2}>
                <LeftContent />
            </Grid>
            <Grid item xs={7}>
                <MiddleContent />
            </Grid>
            <Grid item >
                <RightContent />
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    </div>
    )

}

export default Layout;