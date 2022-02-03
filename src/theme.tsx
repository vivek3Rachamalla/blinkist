
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const defaultTheme = createTheme();

const theme = createTheme({

    typography:{
        fontFamily: "Raleway"
    },
    palette:{
        secondary:{
            main:"#20c997"
        }
    }
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;