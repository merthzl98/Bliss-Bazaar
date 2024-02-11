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

  //   components: {
  //     // Name of the component
  //     // MuiToggleButton: {
  //     //   styleOverrides: {
  //     //     // Name of the slot
  //     //     root: {
  //     //       fontWeight: 500,
  //     //       textTransform: "lowercase",
  //     //     },
  //     //   },
  //     // },
  //     MuiButton: {
  //       styleOverrides: {
  //         // Name of the slot
  //         root: {
  //           color: "white",
  //         },
  //       },
  //     },
  //   },
});

export default theme;
