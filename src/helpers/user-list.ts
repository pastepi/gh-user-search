import { FetchUsersResponse } from "../apis/interfaces"

export const isPageEmpty = (page: FetchUsersResponse): boolean =>
  page?.items?.length === 0
