import { SearchOutlined } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"
import { ControllerRenderProps } from "react-hook-form"

interface Props {
  innerRef: ControllerRenderProps["ref"]
  controllerProps: Omit<ControllerRenderProps, "ref">
}

export const InputField = ({ innerRef, controllerProps }: Props) => (
  <TextField
    label="Search GitHub users"
    type="search"
    slotProps={{
      input: {
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        ),
      },
    }}
    sx={{ mt: 1 }}
    ref={innerRef}
    {...controllerProps}
  />
)
