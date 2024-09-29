import { type ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createTheme, ThemeProvider } from "@mui/material"

const queryClient = new QueryClient()

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

interface Props {
  children: ReactNode
}

export const AllProviders = ({ children }: Props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  )
}
