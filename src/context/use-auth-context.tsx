"use client"
import React, { ReactNode, useState } from 'react'

type InitialValuesProps = {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const InitialValues: InitialValuesProps = {
  currentStep: 1,
  setCurrentStep: () => undefined,
}

const authContext = React.createContext(InitialValues)

const { Provider } = authContext

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState<number>(
    InitialValues.currentStep
  )
  const values = {
    currentStep,
    setCurrentStep,
  }
  return <Provider value={values}>{children}</Provider>
}

export function useAuthContextHook() {
  const state = React.useContext(authContext)
  return state
}
