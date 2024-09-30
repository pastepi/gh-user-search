import { InfiniteData } from "@tanstack/react-query"
import { render } from "../../../test-utils"
import { UserList, UserListProps } from "../UserList"
import { FetchUsersResponse } from "../../../apis/interfaces"

const mockFn = jest.fn()

const mockProps: UserListProps = {
  usersData: { pageParams: [], pages: [] },
  isLoading: false,
  isPending: false,
  isError: false,
  hasNextPage: false,
  fetchNextPage: mockFn,
}

describe("UserList", () => {
  const usersData: InfiniteData<FetchUsersResponse> = {
    pages: [
      {
        incomplete_results: false,
        items: [
          { avatar_url: "foo", login: "bar" },
          { avatar_url: "foo", login: "baz" },
          { avatar_url: "foo", login: "bax" },
        ],
        total_count: 123,
      },
    ],
    pageParams: [],
  }

  it("renders user rows given correct data", () => {
    const { getAllByTestId } = render(
      <UserList {...mockProps} usersData={usersData} />
    )

    expect(getAllByTestId("userRow")).toHaveLength(3)
  })

  it("renders a loader when loading data", () => {
    const { getByTestId, queryAllByTestId } = render(
      <UserList {...mockProps} isLoading />
    )

    expect(getByTestId("loader")).toBeInTheDocument()
    expect(queryAllByTestId("userRow")).toHaveLength(0)
  })

  it("renders user rows and a loader when loading next page data", () => {
    const { getByTestId, getAllByTestId } = render(
      <UserList {...mockProps} usersData={usersData} hasNextPage />
    )

    expect(getAllByTestId("userRow")).toHaveLength(3)
    expect(getByTestId("loader")).toBeInTheDocument()
  })

  it("renders an error message if an error occurred", () => {
    const { getByText } = render(<UserList {...mockProps} isError />)

    expect(
      getByText("An error has occurred. Please try again later.")
    ).toBeInTheDocument()
  })
})
