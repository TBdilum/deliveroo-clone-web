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
        alignItems: "center",
        justifyContent: "center",
        paddingRight: { xs: "0.5rem", sm: "1rem" },
        paddingLeft: { xs: "0.5rem", sm: "1rem" },
      }}
    >
      {PrefixIcon && (
        <PrefixIcon
          style={{
            color: Colors.background.brand,
            height: "1.5rem",
            width: "1.5rem",
            aspectRatio: 1,
          }}
        />
      )}
      {PrefixComponent}

      {title && linkTo ? (
        <Typography
          sx={{
            display: { xs: "none", sm: "flex" },
            marginLeft: { md: "1rem", lg: "0.5rem" },
          }}
        >
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
        <Typography
          sx={{
            display: { xs: "none", sm: "flex" },
            marginLeft: { md: "1rem", lg: "0.5rem" },
          }}
        >
          {title}
        </Typography>
      )}
      {children}
      {SuffixComponent}
    </ButtonBase>
  );
}

export default Button;
