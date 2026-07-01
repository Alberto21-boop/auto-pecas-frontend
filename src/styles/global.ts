import { css, type Theme } from '@emotion/react'

export const globalStyles = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
  min-height: 100vh;

    background:  
    radial-gradient(
      circle at center,
      ${theme.colors['base-background-soft']} 0%,
      ${theme.colors['base-background-screen']} 45%,
      ${theme.colors['base-background-deep']} 100%
    );
    color: ${theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: ${theme.fonts.regular};
    font-weight: 400;
    font-size: ${theme.textSizes['text-regular-m']};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;  
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /*
  input[type='number'] {
    -moz-appearance: textfield;
  }
  */

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors['base-button']};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${theme.colors['brand-purple']};
  }
`