const baseUrl = import.meta.env.VITE_GH_API_URL

interface FetchUsersParams {
  query: string
  pageParam: number
}

export const fetchUsers = async ({
  query,
  pageParam = 1,
}: FetchUsersParams) => {
  const params = Object.fromEntries(
    Object.entries({ q: query, page: pageParam.toString() }).filter(
      ([_, value]) => value
    )
  )
  const queryParams = new URLSearchParams(params).toString()

  try {
    const response = await fetch(baseUrl + `/search/users?${queryParams}`, {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })

    if (!response.ok) {
      throw new Error("An error has occurred.")
    }

    return response.json()
  } catch (error) {
    return error
  }
}
