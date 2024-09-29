import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { GH_USER_SEARCH_NAME } from "../../constants/form"
import { InputField } from "./InputField"

const schema = yup.object({
  [GH_USER_SEARCH_NAME]: yup.string().required(),
})

interface SearchProps {
  handleChangeQuery: (query: string) => void
}

export const Search = ({ handleChangeQuery }: SearchProps) => {
  const { control, watch } = useForm({
    defaultValues: {
      [GH_USER_SEARCH_NAME]: "",
    },
    resolver: yupResolver(schema),
  })
  const searchValue = watch(GH_USER_SEARCH_NAME)

  useEffect(() => {
    handleChangeQuery(searchValue)
  }, [searchValue])

  return (
    <Controller
      name={GH_USER_SEARCH_NAME}
      control={control}
      render={({ field: { ref, ...field } }) => (
        <InputField innerRef={ref} controllerProps={field} />
      )}
    />
  )
}
