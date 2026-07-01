import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`


export const VitralContainer = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
  object-fit: contain;

  opacity: 0.2;
  pointer-events: none;
`;

export const Panel = styled.img`
  position: absolute;
  display: block;
  object-fit: contain;
`

export const Logo = styled.img`
  position: absolute;
  z-index: 10;

  width: 38%;
  max-width: 42rem;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  object-fit: contain;
`