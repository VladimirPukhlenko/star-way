import React, { ComponentProps, FC } from "react";

const buttonsClasses = {
  primary: "px-4 py-2 rounded-lg text-white font-medium bg-darkBlue",
  secondary: "border-2 border-black px-3 py-2 rounded-lg font-medium",
  link: "px-4 py-2 font-medium",
  boldLink: "px-4 py-2 font-bold",
};

type Props = ComponentProps<"button"> & {
  children: React.ReactNode;
  colorType: keyof typeof buttonsClasses;
};

const Button: FC<Props> = ({ children, colorType, ...rest }) => {
  return (
    <button {...rest} className={buttonsClasses[colorType]}>
      {children}
      <div className="rounded-lg font-medium justify-center items-center bg-darkBlue gap-2"></div>
    </button>
  );
};

export default Button;
