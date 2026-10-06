import * as Yup from "yup";

export const commentSchema = Yup.object({
  name: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  comment: Yup.string().required("Comment is required"),
  saveInfo: Yup.boolean(),
});
