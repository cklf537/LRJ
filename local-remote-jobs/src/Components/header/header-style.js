import { makeStyles, useMediaQuery, withWidth, withTheme } from '@material-ui/core'
import { red, white } from '@material-ui/core/colors';
import { createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily:[
          '"Open Sans", sans-serif'
        ],
    }
})

const headerstyle = makeStyles((theme) => ({
    root: {
      backgroundColor:"#2ec4b6",
      maxHeight:'48px',
      
    },
    menuButton: {
        marginTop: '-16px',
        color:'#fff',
        [theme.breakpoints.down('xs')]:{
        marginTop: '-9px'
        }
    },
    title: {
    marginBottom:'15px',
    [theme.breakpoints.down('xs')]:{
        marginBottom:'9px',
    },
    fontSize:'1.6rem',
    fontWeight:800,
    color: 'red !important'
     
    },
    login:{
        textAlign:"right"
    }
  }));

export {headerstyle, theme };