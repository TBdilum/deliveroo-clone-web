import React from "react";
import { ButtonBase, ButtonBaseProps, Typography } from "@mui/material";
import { Link, To } from "react-router-dom";
import { Colors } from "../theme";

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
        border: `0.01px solid ${Colors.border.default}`,
        "&:hover": {
          border: `0.5px solid ${Colors.border.subtle}`,
        },
        display: { xs: "flex", sm: "flex" },
        fontSize: "1rem",
        backgroundColor: Colors.background.defaultLight,
        ...(sx ?? {}),
        paddingLeft: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {PrefixIcon && (
        <PrefixIcon
          style={{
            color: Colors.background.brand,
            paddingRight: "0.3rem",
            height: "1.6rem",
            width: "1.6rem",
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
              color: Colors.text.default,
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
