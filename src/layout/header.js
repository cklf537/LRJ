import { Hidden } from "@material-ui/core";
import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';

const Header = () => {
    return (
        <React.Fragment>
            <Hidden xsDown>
                <Paper>large</Paper>
            </Hidden>
            <Hidden smDown>
                <Paper >medium</Paper>
            </Hidden>
            <Hidden smDown>
                <Paper >small</Paper>
            </Hidden>
            
        </React.Fragment>
    )
}

export default Header;