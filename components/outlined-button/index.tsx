import { Button as MuiButton, SxProps } from "@mui/material";
import React from "react";
import { COLORS } from "../../styles/theme/lightThemeOptions";

interface Props {
  children: React.ReactNode;
  onClick?: any;
  type?: "button" | "submit" | "reset" | undefined;
  sx?: SxProps;
}

const Button = ({ children, onClick, type, sx }: Props) => {
  return (
    <MuiButton
      onClick={onClick}
      sx={{
        border: `3px solid ${COLORS.primary.black}`,
        borderRadius: 2,
        color: COLORS.primary.black,
        m: 0,
        p: 0,
        py: 0.5,
        px: 1,
        textTransform: "none",
        ...sx,

        "&:hover": {
          backgroundColor: COLORS.primary.black,
          color: "#FFF",
        },
      }}
      type={type}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
