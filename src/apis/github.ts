import { FetchUsersParams, FetchUsersResponse } from "./interfaces"

const baseUrl = import.meta.env.VITE_GH_API_URL

export const fetchUsers = async ({
  query,
  pageParam = 1,
}: FetchUsersParams) => {
  const params = Object.fromEntries(
    Object.entries({ q: query, page: pageParam.toString() }).filter(
      ([_, value]) => value
    )
  )
  const queryParams = new URLSearchParams({
    ...params,
    per_page: String(100),
  }).toString()

  const response = await fetch(baseUrl + `/search/users?${queryParams}`, {
    method: "GET",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json() as Promise<FetchUsersResponse>
}
