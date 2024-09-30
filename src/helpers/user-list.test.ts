import { FetchUsersResponse } from "../apis/interfaces"
import { isPageEmpty } from "./user-list"

describe("isPageEmpty", () => {
  it("returns true for page with no items", () => {
    const mockPage: FetchUsersResponse = {
      incomplete_results: false,
      items: [],
      total_count: 0,
    }

    expect(isPageEmpty(mockPage)).toBe(true)
  })

  it("returns false for page with items", () => {
    const mockPage: FetchUsersResponse = {
      incomplete_results: false,
      items: [
        {
          avatar_url: "",
          login: "",
        },
      ],
      total_count: 0,
    }

    expect(isPageEmpty(mockPage)).toBe(false)
  })
})
