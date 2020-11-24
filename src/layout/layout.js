import { Grid, Hidden } from "@material-ui/core";
import React, { Component } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from "./header";

const Layout = () => {

    return (
        <Grid container>
            <Header />
        </Grid>
    )

}

export default Layout;