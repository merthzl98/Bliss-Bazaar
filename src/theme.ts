import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status: {};
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {};
  }
}

const theme = createTheme({
  palette: {
    // primary: { main: "#33a7fb" },
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
