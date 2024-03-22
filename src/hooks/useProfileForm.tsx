import * as Yup from "yup";
import { useState } from "react";
import toast from "react-hot-toast";
import { FormikHelpers, useFormik } from "formik";

import { validationSchema } from "../components/Profile/ProfileForm/schema";

type Values = Yup.InferType<typeof validationSchema>;

const INITIAL_VALUES = {
  fullName: "",
  phone: "",
  email: "",
};

export const useProfileForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    setFile(file);
  };

  const onSubmit = (values: Values, actions: FormikHelpers<Values>) => {
    console.log(values);
    console.log(file?.name);
    toast.success("Form successfully submitted");

    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit,
  });

  return {
    formik,
    file,
    handleFileChange,
  };
};
