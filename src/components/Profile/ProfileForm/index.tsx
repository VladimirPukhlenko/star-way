import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";

import { FIELDS } from "./constants";
import { FileInput } from "../../ui/FileInput";
import { useProfileForm } from "../../../hooks/useProfileForm";
import { validationSchema } from "./schema";

export const ProfileForm = () => {
  const {
    file,
    handleFileChange,
    onSubmit,
    initialValues,
    isSubmittedSuccessfully,
  } = useProfileForm();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {/* ({touched,errors})=> ...*/}
      {() => (
        <Form className="flex flex-col gap-4 md:gap-8">
          <h1 className="text-xl md:text-3xl font-bold">Profile</h1>
          <div className="flex flex-col gap-4">
            {FIELDS.map((field) => (
              <Field
                key={field.id}
                label={field.label}
                name={field.name}
                type={field.type}
                id={field.id}
                as={Input}
              />
            ))}
            <FileInput handleFileChange={handleFileChange} file={file} />
          </div>

          <div className="flex justify-between items-center">
            <Button type="submit" colorType="primary">
              Save Changes
            </Button>
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-4 text-xxs md:text-sm font-semibold text-red-500 ">
              {/* this  */}
              {FIELDS.map((field) => (
                <ErrorMessage
                  name={field.name}
                  component="div"
                  key={field.id}
                />
              ))}

              {/* OR this */}

              {/*  {(touched.fullName && errors.fullName) ||
                  (touched.phone && errors.phone) ||
                  (touched.email && errors.email)} */}

              <div className=" text-green-500">
                {isSubmittedSuccessfully &&
                  "Form has been successfully submitted"}
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
