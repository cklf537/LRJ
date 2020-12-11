import React from 'react';
import { Paper, Typography, Container, Box } from "@material-ui/core";

const HeaderNew = ({classes}) => {
     console.log("classes", classes);
    return (
        <Box fixed>
        <Paper className={classes.paperClass} height={50} square elevation={1}>
            <Typography variant='h1' align="center">
            &lt; Developers | Circle &nbsp; &frasl; &gt;
            </Typography>
        </Paper>
        </Box>
    );
}

export default HeaderNew;