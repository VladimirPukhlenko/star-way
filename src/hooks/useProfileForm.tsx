import { useState } from "react";
import { validationSchema } from "../components/Profile/ProfileForm/schema";
import * as Yup from "yup";
import { FormikHelpers } from "formik";

type Values = Yup.InferType<typeof validationSchema>;

export const useProfileForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    setFile(file);
  };
  const onSubmit = (values: Values, actions: FormikHelpers<Values>) => {
    console.log(values);
    console.log(file?.name);

    setIsSubmittedSuccessfully(true);
    setTimeout(() => setIsSubmittedSuccessfully(false), 3000);

    actions.resetForm();
  };

  const initialValues = {
    fullName: "",
    phone: "",
    email: "",
  };

  return {
    file,
    handleFileChange,
    onSubmit,
    initialValues,
    isSubmittedSuccessfully,
    setIsSubmittedSuccessfully,
  };
};
