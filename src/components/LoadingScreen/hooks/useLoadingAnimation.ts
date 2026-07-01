import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

type UseLoadingAnimationParams = {
  onComplete: () => void
}

export function useLoadingAnimation({
  onComplete,
}: UseLoadingAnimationParams) {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        onComplete,
      })

      timeline
        .fromTo(
          logoRef.current,
          {
            opacity: 0,
            scale: 0.75,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
          },
        )
        .to(logoRef.current, {
          scale: 1.08,
          duration: 0.8,
          ease: 'power1.inOut',
        })
        .to(logoRef.current, {
          opacity: 0,
          scale: 1.25,
          duration: 0.7,
          ease: 'power3.in',
        })
        .to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
        })
    },
    {
      scope: containerRef,
      dependencies: [onComplete],
    },
  )

  return {
    containerRef,
    logoRef,
  }
}