import { useEffect, useState } from 'react'

/**
 *
 * @param value
 * original value
 * @param delay
 * delay in ms
 * @returns
 * debounced value
 */
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}

export default useDebounce
