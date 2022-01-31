
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const defaultTheme = createTheme();

const theme = createTheme({

    typography:{
        fontFamily: "Raleway",
        fontSize: 28
    },
    palette:{
        secondary:{
            main:"#22C870"
        }
    }
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;