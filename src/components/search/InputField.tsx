import { SearchOutlined } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"
import { ControllerRenderProps, FieldError } from "react-hook-form"

interface Props {
  innerRef: ControllerRenderProps["ref"]
  controllerProps: Omit<ControllerRenderProps, "ref">
  error?: FieldError
}

export const InputField = ({ innerRef, error, controllerProps }: Props) => (
  <TextField
    label="Search GitHub users"
    type="search"
    error={!!error}
    helperText={error?.message}
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
