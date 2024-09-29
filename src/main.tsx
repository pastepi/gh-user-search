import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Box } from "@mui/material"

import App from "./App.tsx"
import "./index.css"
import { AllProviders } from "./components/providers/AllProviders.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AllProviders>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100lvh",
          pt: 4,
          alignItems: "flex-start",
        }}
      >
        <App />
      </Box>
    </AllProviders>
  </StrictMode>
)
