import { SearchOutlined } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"
import { ControllerRenderProps } from "react-hook-form"

export const InputField = (props: ControllerRenderProps) => (
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
    {...props}
  />
)
