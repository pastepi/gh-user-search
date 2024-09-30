import { Avatar, Paper, Typography } from "@mui/material"

import { User } from "../../apis/interfaces"
import { ThemeSx } from "../../interfaces/theme"

const wrapperSx: ThemeSx = {
  p: 2,
  display: "flex",
  gap: 2,
  alignItems: "center",
  overflow: "hidden",
}

const loginSx: ThemeSx = {
  overflow: "hidden",
  textOverflow: "ellipsis",
}

interface Props {
  userData: User
}

export const UserRow = ({ userData }: Props) => {
  const { avatar_url, login } = userData

  return (
    <Paper elevation={1} sx={wrapperSx} data-testid="userRow">
      <Avatar alt={login} src={avatar_url} />

      <Typography variant="h6" component="span" sx={loginSx}>
        {login}
      </Typography>
    </Paper>
  )
}
