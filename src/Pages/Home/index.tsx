import { useState } from "react";
import { HomeContainer } from "./styles";
import { LoadingScreen } from "../../components/LoadingScreen";
import { Vitral } from "../../components/Vitral";

export function Home() {
    const [isLoading, setIsLoading] = useState(true)

     function handleLoadingComplete() {
    setIsLoading(false)
  }

   function renderHomeContent() {
    if (isLoading) {
      return (
        <LoadingScreen
          onComplete={handleLoadingComplete}
        />
      )
    }

    return <Vitral />
  }
    return (
        <HomeContainer>
            {renderHomeContent()}
        </HomeContainer>
    );
}