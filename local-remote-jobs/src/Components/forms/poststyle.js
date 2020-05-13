import { makeStyles } from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    root: {
        margin:"1rem 3rem 1rem 3rem",
        paddingBottom:"1.5rem"
      },
      radio:{
        marginTop:'1.5rem'
      },
      input: {
        display: 'none',
      },
      company:{
        width:'50%'
      },
      heading:{
        color:'#e71d36'
      }
}));


export default useStyles;