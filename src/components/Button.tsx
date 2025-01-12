import React, { ReactNode } from "react";
import { ButtonBase, ButtonBaseProps } from "@mui/material";

type ButtonProps = ButtonBaseProps & {
  PrefixComponent?: ReactNode;
  SuffixComponent?: ReactNode;
};

function Button({
  children,
  PrefixComponent,
  SuffixComponent,
  sx,
  ...props
}: ButtonProps) {
  return (
    <ButtonBase
      {...props}
      sx={{
        ...(sx ?? {}),
        borderWidth: 1,
        borderColor: "rgb(232, 235, 235)",
        borderStyle: "solid",
        px: 2,
        py: 1,
        borderRadius: 1,
        color: "rgb(46, 51, 51)",
        fontFamily: "IBM Plex Sans, serif;",
      }}
    >
      {PrefixComponent}
      {children}
      {SuffixComponent}
    </ButtonBase>
  );
}

export default Button;
