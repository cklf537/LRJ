
import  InputBase  from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, makeStyles, Paper } from '@material-ui/core';

const useStyle = makeStyles((theme)=>({
    root:{
        display: 'flex',
        marginRight: theme.spacing(0),
    },
    input:{
        marginLeft: theme.spacing(6),
        
        flex: 1,
    },
    iconButton:{
        marginRight: theme.spacing(2), 
    },
}));


const SearchBar = () => {

    const classes = useStyle();

    return (
        <Paper className={classes.root} elevation={1} square>
            <InputBase
                className={classes.input}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'Search...' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
};

export default SearchBar;