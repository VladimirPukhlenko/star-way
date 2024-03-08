import Input from "./ui/Input";
import Button from "./ui/Button";
import { FaRegIdBadge } from "react-icons/fa";

import useProfileForm from "../hooks/useProfileForm";

const ProfileForm = () => {
  const { formik, file, handleFileChange } = useProfileForm();

  return (
    <div className="flex-1">
      <form className="flex flex-col gap-8" onSubmit={formik.handleSubmit}>
        <h1 className="text-3xl font-bold">Profile</h1>
        <div className="flex flex-col gap-4">
          <Input
            label="Full name"
            name="fullName"
            type="text"
            value={formik.values.fullName}
            onChange={formik.handleChange}
          />

          <Input
            label="Phone"
            type="text"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <Input
            label="Email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div className="border-2 border-[#EAEAEA] flex gap-2 py-3 rounded-md justify-center items-center cursor-pointer">
            <label
              htmlFor="formFile"
              className="text-[#0D3450] text-sm font-medium flex flex-col gap-2"
            >
              <div className="text-[#0D3450] text-lg font-semibold flex gap-2 justify-center items-center cursor-pointer">
                <FaRegIdBadge />
                Upload CV
              </div>
              {file && "Uploaded file : " + file.name}
            </label>
            <input
              type="file"
              className="hidden"
              id="formFile"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Button type="submit" colorType="primary">
            Save Changes
          </Button>
          <div className="text-sm font-semibold text-red-500 ">
            {(formik.touched.fullName && formik.errors.fullName) ||
              (formik.touched.phone && formik.errors.phone) ||
              (formik.touched.email && formik.errors.email)}
            <div className=" text-green-500">
              {formik.status && formik.status.message}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
