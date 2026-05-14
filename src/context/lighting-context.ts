import { createContext, type Dispatch, type SetStateAction } from 'react'

export type LightingContextValue = {
  lampOn: boolean
  toggleLamp: () => void
  setLampOn: Dispatch<SetStateAction<boolean>>
}

export const LightingContext = createContext<LightingContextValue | undefined>(undefined)
