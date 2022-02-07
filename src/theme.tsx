
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        header1?: React.CSSProperties;
        subtitle5?: React.CSSProperties;
    }
  }
  
  // Update the Typography's variant prop options
  declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        header1: true;
        subtitle5: true;

    }
  }


const defaultTheme = createTheme();

const theme = createTheme({
    
    typography:{
        subtitle1:{
            fontFamily: "Cera Pro",
            fontWeight: "700",
            fontSize: "18px",
            style: "normal",
        },
        subtitle5:{
            fontFamily: "Cera Pro",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "25.14px"
        },
        body1:{
            fontFamily: "Cera Pro",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "20.11px",
            style: "normal"
        },
        header1:{
            fontFamily: "Cera Pro",
            fontWeight: "700",
            fontSize: "36px",
            lineHeight: "45.25px",
        },
        body2:{
            fontFamily: "Cera Pro",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20.11px",
            style: "normal"
        },
        caption:{
            fontFamily: "Cera Pro",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "17.6px",
            style: "normal",
            alignSelf: "Right"
        }
    },
    palette:{
        secondary:{
            main:"#20c997"
        }
    }
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;