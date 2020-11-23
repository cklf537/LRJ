import { createMuiTheme } from "@material-ui/core/styles";

const font = "'Montserrat', sans-serif";

const theme = createMuiTheme({
    palette:{
        primary:{
            main: "#2ec4b6"
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