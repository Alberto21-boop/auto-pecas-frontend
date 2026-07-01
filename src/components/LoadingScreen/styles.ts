import styled from "@emotion/styled";

export const LoadingScreenContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: grid;
  place-items: center;

  color: ${({ theme }) => theme.colors['base-background-deep']};
`

export const LogoTheme = styled.div`
 display: flex;
  align-items: baseline;
  gap: 0.4rem;

  color: ${({ theme }) => theme.colors['base-text']};
  text-transform: uppercase;

  strong {
    font-size: 5rem;
    line-height: 1;
    
    color: ${({theme}) => theme.colors['base-loading']}
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.35rem;
  }

`;