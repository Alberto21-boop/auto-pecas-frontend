import { useLoadingAnimation } from "./hooks/useLoadingAnimation";
import { LoadingScreenContainer, LogoTheme } from "./styles";

type LoadingScreenProps = {
  onComplete: () => void
}

export function LoadingScreen({onComplete}: LoadingScreenProps) {
     const { containerRef, logoRef } = useLoadingAnimation({
    onComplete,
  })
    return (
        <LoadingScreenContainer ref={containerRef}>
            <LogoTheme ref={logoRef}>
                <h1>Torque House</h1>
            </LogoTheme>
        </LoadingScreenContainer>
    );
}