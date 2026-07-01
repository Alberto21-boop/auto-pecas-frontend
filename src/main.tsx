import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { Global, ThemeProvider } from '@emotion/react'
import { defaultTheme } from './styles/themes/default.ts'
import { globalStyles } from './styles/global.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Global styles={globalStyles} />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
