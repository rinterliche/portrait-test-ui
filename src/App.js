import { useState } from "react"
import { AppContext } from "./AppContext"
import AppHeader from "./components/header"
import AppForm from "./components/form"
import AppTable from "./components/table"

function App() {
  const [appState, setAppState] = useState({
    tickers: [],
    isLoadingTickers: false,
    searchTerm: ""
  })

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      <div className="h-full text-white">
        <div className="m-10 md:m-20">
          <AppHeader />
          <AppForm />
          <AppTable />
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
