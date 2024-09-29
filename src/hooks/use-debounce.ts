import { useEffect, useState } from "react"

export const useDebounce = <T>(value: T, delay = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    if (!delay) {
      return
    }

    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return (): void => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return delay ? debouncedValue : value
}
