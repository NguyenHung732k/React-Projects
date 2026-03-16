export function useIntentLoader() {
  const [state, setState] = useState<LoaderState>("idle")

  useEffect(() => {
    if (!loading) {
      setState("idle")
      return
    }

    setState("shimmer")

    const skeletonTimer = setTimeout(() => {
      setState("skeleton")
    }, 150)

    const placeholderTimer = setTimeout(() => {
      setState("placeholder")
    }, 900)

    return () => {
      clearTimeout(skeletonTimer)
      clearTimeout(placeholderTimer)
    }
  }, [loading])

  return state
}