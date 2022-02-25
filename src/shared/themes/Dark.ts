import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[700],
      light: yellow[700],
      contrastText: 'ffffff',
    },
    secondary: {
       main: cyan[700],
      dark: cyan[700],
      light: cyan[700],
      contrastText: 'ffffff',
    },
    background: {
      paper: '303134',
      default: '202124',

    }
  }
});