import { Form, Field, ErrorMessage, FormikProvider } from "formik";

import { FIELDS } from "../constants";
import { useProfileForm } from "../../../hooks/useProfileForm";
import { FileInput } from "../../../design-components/FileInput";
import { Button } from "../../../design-components/Button";
import { Input } from "../../../design-components/Input";

export const ProfileForm = () => {
  const { formik, file, handleFileChange } = useProfileForm();

  return (
    <FormikProvider value={formik}>
      <Form className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-xl md:text-3xl font-bold">Profile</h1>
        <div className="flex flex-col gap-4">
          {FIELDS.map((field) => (
            <Field
              key={field.id}
              label={field.label}
              name={field.name}
              type="text"
              id={field.id}
              as={Input}
            />
          ))}
          <FileInput handleFileChange={handleFileChange} file={file} />
        </div>

        <div className="flex justify-between items-center">
          <Button type="submit" variant="primary">
            Save Changes
          </Button>
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-4 text-xxs md:text-sm font-semibold text-red-500 ">
            {/* this  */}
            {FIELDS.map((field) => (
              <ErrorMessage name={field.name} component="div" key={field.id} />
            ))}

            {/* OR this */}

            {/*  {(touched.fullName && errors.fullName) ||
                  (touched.phone && errors.phone) ||
                  (touched.email && errors.email)} */}
          </div>
        </div>
      </Form>
    </FormikProvider>
  );
};
