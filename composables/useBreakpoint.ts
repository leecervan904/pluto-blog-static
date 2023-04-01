import { useBreakpoints } from '@vueuse/core'

export function useBreakpoint() {
  const breakpoints = useBreakpoints({
    mobile: 640,
    tablet: 960,
    laptop: 1280,
    desktop: 1600,
  })

  const isMobile = computed(() => breakpoints.smaller('mobile').value)

  return {
    breakpoints,
    isMobile,
  }
}
