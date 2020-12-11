import { red } from '@material-ui/core/colors';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { SkipNextTwoTone } from '@material-ui/icons';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   color: {
//     backgroundColor: 'black'
//     }
// }));

// export {useStyles};

const useStyles = makeStyles((theme) =>({
  root:{
      backgroundColor: "red"
  },
  hbg:{
    backgroundColor: "#E07A5F",
    height:"60vh",
    transform: "skewY(-4deg)",
    position:"relative",
    top:"-50px",
    borderBottom: "solid 10px #F2CC8F"
  },
  paperClass:{
    position:"relative",
    transform: "skewY(4deg)",
    top:"50px",
    backgroundColor: "#fff",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  }
  
}));

export default useStyles;