import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();
  return (
    <Box
      onClick={() => router.push("/")}
      sx={{
        alignItems: "center",
        display: "flex",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Image src="/web-programming.png" alt="logo" width={35} height={30} />
      <Typography variant="h1" sx={{ ml: 2 }}>
        Davidson <br></br>Programming
      </Typography>
    </Box>
  );
};

export default Logo;
