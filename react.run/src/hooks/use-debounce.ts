import { useEffect, useState } from 'react'

export default function useDebounce<T>(value: T, wait = 0): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const tid = setTimeout(() => setDebouncedValue(value), wait)

    return () => clearTimeout(tid)
  }, [value])

  return debouncedValue
}
