import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Logo = () => {
  return (
    <Box sx={{ alignItems: "center", display: "flex" }}>
      <Image src="/web-programming.png" alt="logo" width={35} height={30} />
      <Typography variant="h1" sx={{ ml: 2 }}>
        Davidson <br></br>Programming
      </Typography>
    </Box>
  );
};

export default Logo;
