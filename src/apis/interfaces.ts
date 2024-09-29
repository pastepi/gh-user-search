export interface FetchUsersParams {
  query: string
  pageParam: number
}

export interface User {
  avatar_url: string
  login: string
}

export interface FetchUsersResponse {
  incomplete_results: boolean
  items: User[]
  total_count: number
}
