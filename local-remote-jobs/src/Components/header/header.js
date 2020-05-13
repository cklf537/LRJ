import React from 'react';
import { headerstyle, theme } from './header-style';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider } from '@material-ui/core/styles';


const Header = () => {
    const classes = headerstyle();
    return (
        <ThemeProvider theme={theme} >
            <AppBar className={classes.root} elevation={2}>
                <Toolbar>
                    <IconButton edge="start" aria-label="menu" className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        LRJ.
                </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;