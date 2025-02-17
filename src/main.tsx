import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { SnackbarProvider } from "notistack";

const theme = createTheme({
  typography: {
    fontFamily: ["IBM Plex Sans", "serif"].join(","),
    allVariants: {
      fontFamily: ["IBM Plex Sans", "serif"].join(","),
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          style={{ marginTop: "3rem" }}
        >
          <App />
        </SnackbarProvider>
      </StrictMode>
    </ThemeProvider>
  </HelmetProvider>,
);
