import { createContext } from "react"

export const AppContext = createContext(
  {
    tickers: [],
    isLoadingTickers: false,
    searchTerm: ""
  }
)
