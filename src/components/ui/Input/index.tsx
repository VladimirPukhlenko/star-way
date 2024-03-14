import { ComponentProps, FC } from "react";

type Props = ComponentProps<"input"> & {
  label: string;
};

export const Input: FC<Props> = ({ label, ...rest }) => (
  <div className="flex gap-2 px-2 py-1 border-2 border-myGray rounded-md">
    <label
      htmlFor={rest.id}
      className="md:text-lg text-darkBlue font-semibold cursor-pointer"
    >
      {label}:
    </label>
    <input
      {...rest}
      className="flex flex-1 border focus:outline-none border-none"
    />
  </div>
);
