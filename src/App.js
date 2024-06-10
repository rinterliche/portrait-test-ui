import AppHeader from "./components/header"
import AppForm from "./components/form"
import AppTable from "./components/table"

function App() {
  return (
    <div className="h-full bg-cyan-950 text-white px-20">
      <AppHeader />
      <AppForm />
      <AppTable />
    </div>
  )
}

export default App
