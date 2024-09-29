import * as yup from "yup"

export const GH_USER_SEARCH_NAME = "ghUserSearch"

export const searchSchema = yup
  .object({
    [GH_USER_SEARCH_NAME]: yup
      .string()
      .matches(
        /^[a-zA-Z0-9-]*$/,
        "Only alphanumeric characters and dashes are allowed."
      )
      .max(39)
      .required("Required."),
  })
  .required()
