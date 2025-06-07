import React, { createContext, useState, useContext } from "react"

const LoadingContext = createContext<
  Partial<{
    loadingText: string | null
    setLoadingText: React.Dispatch<React.SetStateAction<string | null>>
  }>
>({})

export const useLoadingContext = () => {
  return useContext(LoadingContext)
}

const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [loadingText, setLoadingText] = useState<string | null>(null)

  return (
    <LoadingContext.Provider value={{ loadingText, setLoadingText }}>
      {children}
    </LoadingContext.Provider>
  )
}

export { LoadingProvider }
