import * as Yup from "yup";

export const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string().required("Email is required"),
});
