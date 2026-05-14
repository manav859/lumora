import {
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { LightingContext } from './lighting-context'

const STORAGE_KEY = 'lumora-lamp-state'

function readStoredLampState() {
  if (typeof window === 'undefined') {
    return false
  }

  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'on'
  } catch {
    return false
  }
}

export function LightingProvider({ children }: { children: ReactNode }) {
  const [lampOn, setLampOn] = useState<boolean>(readStoredLampState)

  useEffect(() => {
    const lampState = lampOn ? 'on' : 'off'

    document.documentElement.dataset.lampState = lampState
    document.body.dataset.lampState = lampState
    document.documentElement.style.colorScheme = lampOn ? 'light' : 'dark'

    try {
      window.localStorage.setItem(STORAGE_KEY, lampState)
    } catch {
      // Ignore storage write failures and keep the in-memory state authoritative.
    }
  }, [lampOn])

  return (
    <LightingContext.Provider
      value={{
        lampOn,
        toggleLamp: () => setLampOn((value) => !value),
        setLampOn,
      }}
    >
      {children}
    </LightingContext.Provider>
  )
}
