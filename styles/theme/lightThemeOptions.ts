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
      fontSize: 90,
      "@media (max-width:600px)": {
        fontSize: 60,
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
    // white: "#fffdf2",
    white: "#ffffff",
  },
};

export default lightThemeOptions;
