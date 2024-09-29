import { useCallback, useState } from "react"
import { Container } from "@mui/material"

import { useFetchUsers } from "./hooks/use-fetch-users"
import { UserList } from "./components/user-list/UserList"
import { Search } from "./components/search/Search"
import { useDebounce } from "./hooks/use-debounce"
import { ThemeSx } from "./interfaces/theme"

const containerSx: ThemeSx = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 2,
}

function App() {
  const [query, setQuery] = useState<string>("")
  const debouncedQuery = useDebounce(query, 2000)

  const handleChangeQuery = useCallback(
    (input: string) => setQuery(input),
    [setQuery]
  )
  const { data, isLoading, isPending, fetchNextPage, hasNextPage, isError } =
    useFetchUsers({
      query: debouncedQuery,
    })

  return (
    <Container maxWidth="md" sx={containerSx}>
      <Search handleChangeQuery={handleChangeQuery} />

      <UserList
        usersData={data}
        isError={isError}
        isLoading={isLoading}
        isPending={isPending}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </Container>
  )
}

export default App
