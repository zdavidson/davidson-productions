import { Button as MuiButton, SxProps } from "@mui/material";
import React from "react";
import { COLORS } from "../../styles/theme/lightThemeOptions";

interface Props {
  children: React.ReactNode;
  onClick?: any;
  sx?: SxProps;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ children, onClick, sx, type }: Props) => {
  return (
    <MuiButton
      sx={{
        border: `3px solid ${COLORS.primary.black}`,
        borderRadius: 2,
        backgroundColor: COLORS.primary.black,
        color: "#FFF",
        m: 0,
        p: 0,
        py: 1,
        px: 2,
        textTransform: "none",
        ...sx,

        "&:hover": {
          color: COLORS.primary.black,
          backgroundColor: "#FFF",
        },
      }}
      onClick={onClick}
      type={type}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
