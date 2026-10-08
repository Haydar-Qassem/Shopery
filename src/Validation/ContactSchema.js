import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  templateCookies: Yup.string(),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});
