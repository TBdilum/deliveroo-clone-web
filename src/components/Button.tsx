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
        borderStyle: "solid",
        px: 2,
        py: 1,
        borderRadius: 1,
        fontFamily: "IBM Plex Sans, serif;",
        whiteSpace: "nowrap",
      }}
    >
      {PrefixComponent}
      {children}
      {SuffixComponent}
    </ButtonBase>
  );
}

export default Button;
