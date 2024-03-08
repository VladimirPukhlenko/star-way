import React, { ComponentProps, FC } from "react";

type Props = ComponentProps<"input"> & {
  label: string;
};

const Input: FC<Props> = ({ label, ...rest }) => {
  return (
    <div className="border-2 border-[#EAEAEA] flex gap-2 px-2 py-1 rounded-md">
      <label className="text-[#0D3450] text-lg font-semibold">{label}:</label>
      <input
        {...rest}
        className="border flex flex-1 focus:outline-none border-none "
      />
    </div>
  );
};

export default Input;
