import { useCallback, useState } from "react"
import { useFetchUsers } from "./hooks/use-fetch-users"
import { UserList } from "./components/user-list/UserList"
import { Search } from "./components/search/Search"
import { useDebounce } from "./hooks/use-debounce"

function App() {
  const [query, setQuery] = useState<string>("")
  const debouncedQuery = useDebounce(query)

  const handleChangeQuery = useCallback(
    (input: string) => setQuery(input),
    [setQuery]
  )
  const { data } = useFetchUsers({ query: debouncedQuery })

  return (
    <div>
      <Search handleChangeQuery={handleChangeQuery} />
      <UserList />
    </div>
  )
}

export default App
