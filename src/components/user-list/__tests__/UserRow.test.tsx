import { User } from "../../../apis/interfaces"
import { UserRow } from "../UserRow"
import { render } from "../../../test-utils"

const mockUserData: User = {
  avatar_url: "foo",
  login: "bar",
}

describe("UserRow", () => {
  it("renders components correctly given data", async () => {
    const { getByText, getByRole } = render(<UserRow userData={mockUserData} />)

    expect(getByText(mockUserData.login)).toBeInTheDocument()
    expect(getByRole("img")).toBeInTheDocument()
  })
})
