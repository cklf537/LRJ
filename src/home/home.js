import { makeStyles } from '@material-ui/core/styles';
import {Box, Container, Paper, Typography} from '@material-ui/core';
import HeaderNew from '../components/layout/header-new';
import HomeBanner from '../components/banner/home-banner';
import useStyles from './home-style';


const Home = ()=>{
const classes = useStyles();

    return(
        <Box className={classes.hbg} height={100}>
           <HeaderNew classes={classes} />
           <HomeBanner />
        </Box>
        
    );
} 

export default Home;