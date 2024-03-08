import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const useProfileForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      phone: Yup.string().required("Phone is required"),
      email: Yup.string().required("Email is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      console.log(file?.name);

      formik.setStatus({
        message: "Form submitted successfully (data in console)",
      });
      setTimeout(() => {
        formik.resetForm();
        setFile(null);
      }, 3000);
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    setFile(file);
  };

  return { formik, file, handleFileChange };
};

export default useProfileForm;
