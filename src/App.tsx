import { useState } from "react"
import { useFetchUsers } from "./hooks/use-fetch-users"

function App() {
  const [query, setQuery] = useState<string>("test")

  const { data } = useFetchUsers({ query })

  return <div>Test</div>
}

export default App
