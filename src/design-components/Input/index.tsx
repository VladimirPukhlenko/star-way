import { ComponentProps, FC } from "react";
import cn from "classnames";
type Props = ComponentProps<"input"> & {
  label: string;
};

export const Input: FC<Props> = ({ label, ...props }) => {
  const { className, ...rest } = props;
  return (
    <div className="flex gap-2 px-2 py-1 border-2 border-myGray rounded-md">
      <label
        htmlFor={rest.id}
        className="md:text-lg text-darkBlue font-semibold cursor-pointer"
      >
        {label}:
      </label>
      <input
        className={cn(
          "flex flex-1 border focus:outline-none border-none",
          className
        )}
        {...rest}
      />
    </div>
  );
};
