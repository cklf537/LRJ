
import bannerStyle from './home-banner-style';
import { Paper, Box } from "@material-ui/core";

const HomeBanner = ()=>{
    const classes = bannerStyle();
    console.log("bannerStyle", classes);
    return (
        <Box>
            <Paper className={classes.homeBanner}>home banner </Paper>
        </Box>
    );
}

export default HomeBanner