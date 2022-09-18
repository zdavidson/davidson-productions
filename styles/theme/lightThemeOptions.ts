import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
  },

  typography: {
    h1: {
      fontSize: 25,
      fontWeight: 400,
    },
    h2: {
      fontSize: 70,
      "@media (min-width:600px)": {
        fontSize: 80,
      },
      fontWeight: 600,
      letterSpacing: -3,
    },
    body1: {
      "@media (min-width:600px)": {
        fontSize: 20,
      },
      lineHeight: 1.65,
    },
    body2: {
      "@media (min-width:600px)": {
        fontSize: 20,
      },
      fontWeight: 600,
    },
  },
};

export const COLORS = {
  primary: {
    black: "#131214",
  },
};

export default lightThemeOptions;
