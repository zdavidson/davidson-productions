import { Button as MuiButton, SxProps } from "@mui/material";
import React from "react";
import { COLORS } from "../../styles/theme/lightThemeOptions";

interface Props {
  children: React.ReactNode;
  color?: string;
  onClick?: any;
  type?: "button" | "submit" | "reset" | undefined;
  sx?: SxProps;
}

const Button = ({ children, color, onClick, type, sx }: Props) => {
  return (
    <MuiButton
      onClick={onClick}
      sx={{
        border: `3px solid ${color ?? COLORS.primary.black}`,
        borderRadius: 2,
        color: COLORS.primary.black,
        m: 0,
        p: 0,
        py: 0.5,
        px: 1,
        textTransform: "none",
        ...sx,

        "&:hover": {
          backgroundColor: color ? COLORS.primary.white : COLORS.primary.black,
          color: color ? COLORS.primary.black : COLORS.primary.white,
        },
      }}
      type={type}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
