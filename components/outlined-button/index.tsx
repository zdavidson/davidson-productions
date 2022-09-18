import { Button as MuiButton } from "@mui/material";
import React from "react";
import { COLORS } from "../../styles/theme/lightThemeOptions";

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <MuiButton
      sx={{
        border: `3px solid ${COLORS.primary.black}`,
        borderRadius: 2,
        color: COLORS.primary.black,
        m: 0,
        p: 0,
        py: 0.5,
        px: 1,
        textTransform: "none",
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
