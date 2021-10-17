import "../styles/globals.css";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/react";

const customTheme = {
  ...theme,
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
