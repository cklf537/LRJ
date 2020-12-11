import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette:{
        primary:{
            light: '#6ff7e8',
            main: '#FFFFFF',
            dark: '#009386',
            contrastText: '#1c1c1c',
        },
        secondary:{
            main: "#e71d36"
        },
        background:{
            default: "#fff"
        }
    },
    typography:{
        body1:{
            color: "#1D3557"
        },
        h1:{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: "900",
            fontSize: '1rm',
            color: "#3D405B"
        }
    },
    
})

// theme.typography.h4 = {
//     [theme.breakpoints.up('sm')]: {
//         fontSize: '2.2rem',
//     }
//   }
  

export default theme;