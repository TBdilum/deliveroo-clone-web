import React from "react";
import { ButtonBase, ButtonBaseProps, Typography } from "@mui/material";
import { Link, To } from "react-router-dom";

type ButtonProps = ButtonBaseProps & {
  PrefixIcon?: React.ComponentType<{
    style: React.CSSProperties;
  }>;
  PrefixComponent?: React.ReactNode;
  SuffixComponent?: React.ReactNode;
  linkTo?: To;
};

function Button({
  children,
  PrefixIcon,
  PrefixComponent,
  SuffixComponent,
  sx,
  title,
  linkTo,
  ...props
}: ButtonProps) {
  return (
    <ButtonBase
      {...props}
      sx={{
        px: 2,
        py: 1,
        borderRadius: 1,
        fontFamily: "IBM Plex Sans, serif;",
        whiteSpace: "nowrap",
        border: "0.02px solid #ccc",
        display: { xs: "none", sm: "flex" },
        mr: 0.5,
        fontSize: "1rem",
        backgroundColor: "white",
        ...(sx ?? {}),
      }}
    >
      {PrefixIcon && (
        <PrefixIcon
          style={{
            color: "rgb(0, 204, 188)",
            paddingRight: 0.8,
            height: "1.5rem",
            width: "1.5rem",
            aspectRatio: 1,
          }}
        />
      )}
      {PrefixComponent}

      {title && linkTo ? (
        <Typography sx={{ display: { xs: "none", sm: "flex" } }}>
          <Link
            to={linkTo}
            style={{
              textDecoration: "none",
              color: "#2e3333",
            }}
          >
            {title}
          </Link>
        </Typography>
      ) : (
        <Typography sx={{ display: { xs: "none", sm: "flex" } }}>
          {title}
        </Typography>
      )}
      {children}
      {SuffixComponent}
    </ButtonBase>
  );
}

export default Button;
