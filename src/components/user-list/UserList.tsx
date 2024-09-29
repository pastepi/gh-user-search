import { InfiniteData } from "@tanstack/react-query"
import { Box, CircularProgress, css, Typography } from "@mui/material"
import InfiniteScroll from "react-infinite-scroller"

import { FetchUsersResponse } from "../../apis/interfaces"
import { useFetchUsers } from "../../hooks/use-fetch-users"
import { ThemeSx } from "../../interfaces/theme"
import { isPageEmpty } from "../../helpers/user-list"
import { UserRow } from "./UserRow"

const infiniteScrollCss = css`
  display: flex;
  flex-direction: column;
`

const loaderSx: ThemeSx = { placeSelf: "center", m: 3 }

const infoSx: ThemeSx = { mt: 2, placeSelf: "center" }

const usersWrapperSx: ThemeSx = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
}

interface Props {
  usersData: InfiniteData<FetchUsersResponse> | undefined
  isLoading: boolean
  isError: boolean
  isPending: boolean
  fetchNextPage: ReturnType<typeof useFetchUsers>["fetchNextPage"]
  hasNextPage: boolean
}

export const UserList = ({
  usersData,
  isLoading,
  isError,
  isPending,
  fetchNextPage,
  hasNextPage,
}: Props) => {
  if (isLoading) {
    return <CircularProgress size={50} sx={loaderSx} />
  }

  if (isPending) {
    return null
  }

  if (isError) {
    return (
      <Typography sx={infoSx} variant="h5">
        An error has occurred. Please try again later.
      </Typography>
    )
  }

  const { pages: userPages } = usersData!

  /* Note on functional programming: 'isPageEmpty' is matching the function signature of '.every' predicate */
  if (userPages.every(isPageEmpty)) {
    return (
      <Typography sx={infoSx} variant="h5">
        No users found.
      </Typography>
    )
  }

  return (
    <InfiniteScroll
      loadMore={fetchNextPage}
      hasMore={hasNextPage}
      loader={<CircularProgress sx={loaderSx} />}
      css={infiniteScrollCss}
    >
      <Box sx={usersWrapperSx}>
        {userPages.map(({ items }) =>
          items.map((item) => <UserRow userData={item} key={item.login} />)
        )}
      </Box>
    </InfiniteScroll>
  )
}
