import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
//import { Provider } from "react-redux";
//import { store } from "./store/store.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";

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
        <App />
      </StrictMode>
    </ThemeProvider>
  </HelmetProvider>,
);
