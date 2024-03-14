import React, { FC } from "react";
import { FaRegIdBadge } from "react-icons/fa";
type Props = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
};
export const FileInput: FC<Props> = ({ handleFileChange, file }) => (
  <div className="flex gap-2 justify-center items-center py-3 border-2 border-myGray rounded-md cursor-pointer">
    <label
      htmlFor="formFile"
      className="flex flex-col gap-2 text-darkBlue text-sm font-medium"
    >
      <div className="flex gap-2 justify-center items-center text-darkBlue md:text-lg font-semibold cursor-pointer">
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
);
