/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GH_API_URL: string
  readonly GH_PAT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
