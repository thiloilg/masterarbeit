import { useState, useEffect } from 'react'

export function useLocalStorage(key, init = {}) {
  const updateInMs = 3000

  if (localStorage.getItem(key) !== null) {
    init = JSON.parse(localStorage.getItem(key))
  } else {
    localStorage.setItem(key, JSON.stringify(init))
  }

  const [state, setState] = useState(init)

  async function setLocalStorage(value) {
    localStorage.setItem(key, JSON.stringify(value))
    setState(value)
  }

  useEffect(() => {
    async function fetchLocalStorage() {
      const val = localStorage.getItem(key)
      if (JSON.stringify(state) !== val) {
        setState(JSON.parse(val))
      }
    }

    const refreshIntervalId = setInterval(fetchLocalStorage, updateInMs)
    return () => clearInterval(refreshIntervalId)
  }, [state, key])

  return [state, setLocalStorage]
}
