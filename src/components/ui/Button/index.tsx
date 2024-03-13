import React, { ComponentProps, FC } from "react";
import { BUTTONS_CLASSES } from "./constants";

type Props = ComponentProps<"button"> & {
  children: React.ReactNode;
  colorType: keyof typeof BUTTONS_CLASSES;
};

export const Button: FC<Props> = ({ children, colorType, ...rest }) => (
  <button {...rest} className={BUTTONS_CLASSES[colorType]}>
    {children}
  </button>
);
