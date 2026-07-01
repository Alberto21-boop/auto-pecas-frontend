import { Global, ThemeProvider } from "@emotion/react";
import { defaultTheme } from "./styles/themes/default";
import { globalStyles } from "./styles/global";
import { Home } from "./Pages/Home";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Global styles={globalStyles} />   
      <Home />
    </ThemeProvider>
  )
}
