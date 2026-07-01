import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof import('../styles/themes/default').defaultTheme.colors
    textSizes: typeof import('../styles/themes/default').defaultTheme.textSizes
    fonts: typeof import('../styles/themes/default').defaultTheme.fonts
  }
}