import { useEffect, useState } from "react"

export function useLiveData(initial) {
  const [value, setValue] = useState(initial)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(v => v + Math.floor(Math.random() * 200 - 100))
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return value
}