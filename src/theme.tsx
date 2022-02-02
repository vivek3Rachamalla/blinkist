
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const defaultTheme = createTheme();

const theme = createTheme({

    typography:{
        fontFamily: "Raleway",
        fontSize: 28
    },
    palette:{
        secondary:{
            main:"#20c997"
        }
    }
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;