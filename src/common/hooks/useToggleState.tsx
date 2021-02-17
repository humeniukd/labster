import { useState, useCallback } from 'react'

export const useToggleState = (initialStateValue: boolean) => {
  const [state, setState] = useState(initialStateValue)
  const toggleState = useCallback(() => setState(prevState => !prevState), [])

  return [state, toggleState] as const
}
