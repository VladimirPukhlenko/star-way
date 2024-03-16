import React, { ComponentProps, FC } from "react";
import { BUTTONS_CLASSES } from "./constants";

type Props = ComponentProps<"button"> & {
  children: React.ReactNode;
  variant: keyof typeof BUTTONS_CLASSES;
};

export const Button: FC<Props> = ({ children, variant, ...rest }) => (
  <button {...rest} className={BUTTONS_CLASSES[variant]}>
    {children}
  </button>
);
