import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  palette: {
    primary: { main: "#2d2e32" },
  },

  typography: {
    fontFamily: "inherit",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

export default theme;
