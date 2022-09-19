import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  color?: string;
}
// https://www.flaticon.com/free-icon/web-programming_2809371?term=code&page=1&position=70&page=1&position=70&related_id=2809371&origin=search
const Logo = ({ color }: Props) => {
  const router = useRouter();
  return (
    <Box
      onClick={() => router.push("/")}
      sx={{
        alignItems: "center",
        display: "flex",

        "&:hover": {
          cursor: "pointer",
          textDecoration: "underline",
        },
      }}
    >
      <Image
        src={color ? "/web-programming-white.png" : "/web-programming.png"}
        alt="logo"
        width={35}
        height={30}
      />
      <Typography variant="h1" sx={{ color: color, ml: 2 }}>
        Davidson <br></br>Programming
      </Typography>
    </Box>
  );
};

export default Logo;
