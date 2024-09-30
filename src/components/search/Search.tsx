import { useEffect } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { css } from "@emotion/react"

import { GH_USER_SEARCH_NAME, searchSchema } from "../../constants/form"
import { InputField } from "./InputField"

const formCss = css`
  display: contents;
`

interface SearchProps {
  handleChangeQuery: (query: string) => void
}

export const Search = ({ handleChangeQuery }: SearchProps) => {
  const {
    control,
    watch,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      [GH_USER_SEARCH_NAME]: "",
    },
    resolver: yupResolver(searchSchema),
    mode: "all", // Note: could impact performance
  })
  const searchValue = watch(GH_USER_SEARCH_NAME)

  const onSubmit: SubmitHandler<{ [GH_USER_SEARCH_NAME]: string }> = async (
    _
  ) => {
    const isValid = await trigger()

    if (!isValid) return

    handleChangeQuery(searchValue)
  }

  useEffect(() => {
    if (errors?.[GH_USER_SEARCH_NAME]) return

    handleChangeQuery(searchValue)
  }, [searchValue, trigger, errors?.[GH_USER_SEARCH_NAME]])

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={formCss} role="form">
      <Controller
        name={GH_USER_SEARCH_NAME}
        control={control}
        render={({ field: { ref, ...field } }) => (
          <InputField
            innerRef={ref}
            controllerProps={field}
            error={errors?.[GH_USER_SEARCH_NAME]}
          />
        )}
      />
    </form>
  )
}
