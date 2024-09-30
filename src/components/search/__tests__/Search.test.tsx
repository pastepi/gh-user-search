import { GH_USER_SEARCH_NAME } from "../../../constants/form"
import { fireEvent, render } from "../../../test-utils"
import { Search } from "../Search"

const mockFn = jest.fn()

describe("Search", () => {
  it("renders an empty text input field", () => {
    const { getByLabelText, getByRole } = render(
      <Search handleChangeQuery={mockFn} />
    )

    expect(getByLabelText("Search GitHub users")).toBeInTheDocument()
    expect(getByRole("form")).toHaveFormValues({
      [GH_USER_SEARCH_NAME]: "",
    })
  })

  it("renders text input field with search phrase", () => {
    const { getByLabelText, getByRole } = render(
      <Search handleChangeQuery={mockFn} />
    )

    const searchInput = getByLabelText("Search GitHub users")
    fireEvent.change(searchInput, { target: { value: "123" } })

    expect(searchInput).toBeInTheDocument()
    expect(getByRole("form")).toHaveFormValues({
      [GH_USER_SEARCH_NAME]: "123",
    })
  })

  it("calls handler on text input change", () => {
    const { getByLabelText } = render(<Search handleChangeQuery={mockFn} />)

    const searchInput = getByLabelText("Search GitHub users")
    fireEvent.change(searchInput, { target: { value: "123" } })

    expect(searchInput).toBeInTheDocument()
    expect(mockFn).toHaveBeenCalled()
  })
})
