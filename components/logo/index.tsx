import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  color?: string;
  width?: number;
  height?: number;
  variant?:
    | "h1"
    | "button"
    | "caption"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | undefined;
  marginLeft?: number;
}
// https://www.flaticon.com/free-icon/web-programming_2809371?term=code&page=1&position=70&page=1&position=70&related_id=2809371&origin=search
const Logo = ({
  color,
  width = 35,
  height = 30,
  variant = "h1",
  marginLeft = 2,
}: Props) => {
  const router = useRouter();
  const route = router.route;
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
      {/* <Image
        src={color ? "/video-camera.png" : "/web-programming.png"}
        alt="logo"
        width={width}
        height={height}
      /> */}
      <Typography
        variant={variant}
        sx={{
          color: color,

          "@media (max-width:600px)": {
            fontSize: route === "/academy" ? "2.5rem" : "auto",
          },
        }}
      >
        Davidson <br></br>Productions
      </Typography>
    </Box>
  );
};

export default Logo;
