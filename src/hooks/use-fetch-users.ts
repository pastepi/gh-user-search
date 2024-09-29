import { useInfiniteQuery } from "@tanstack/react-query"

import { queryKeys } from "../constants/hooks"
import { fetchUsers } from "../apis/github"
import type { UseFetchUsersParams } from "./interfaces"

export const useFetchUsers = ({ query, pageParam }: UseFetchUsersParams) => {
  const {
    data,
    isError,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isPending,
  } = useInfiniteQuery({
    queryKey: [queryKeys.fetchUsers, { query, pageParam }],
    queryFn: ({ pageParam }) => fetchUsers({ query, pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) =>
      lastPage.items.length === 0 ? undefined : lastPageParam + 1,
    enabled: !!query,
    staleTime: Infinity,
  })

  return {
    data,
    isError,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isPending,
  }
}
