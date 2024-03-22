import React, { ComponentProps, FC } from "react";
import { BUTTONS_CLASSES } from "./constants";
import cn from "classnames";

type Props = ComponentProps<"button"> & {
  children: React.ReactNode;
  variant: keyof typeof BUTTONS_CLASSES;
};

export const Button: FC<Props> = ({ children, variant, ...props }) => {
  const { className, ...rest } = props;
  return (
    <button className={cn(BUTTONS_CLASSES[variant], className)} {...rest}>
      {children}
    </button>
  );
};
