import { createMuiTheme } from "@material-ui/core/styles";

const font = "'Montserrat', sans-serif";

const theme = createMuiTheme({
    palette:{
        primary:{
            light: '#6ff7e8',
            main: '#2ec4b6',
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
            fontFamily:font
        }
    }
})

export default theme;