import { Box, SxProps, Typography } from "@mui/material";
import Button from "../outlined-button";
import Logo from "../logo";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useRouter } from "next/router";
import Link from "next/link";
import SchoolIcon from "@mui/icons-material/School";
import { COLORS } from "../../styles/theme/lightThemeOptions";

interface Props {
  bottom?: boolean;
  color?: string;
  sx?: SxProps;
}

const Navigation = ({ bottom, color, sx }: Props) => {
  const router = useRouter();
  const route = router.route;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: `1.5px solid ${COLORS.primary.white}`,
        paddingBottom: "2rem",
        ...sx,
      }}
    >
      <Logo color={color} />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "flex-end",
          width: "38vw",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            mr: 0,
            width: bottom ? "50vw" : "15vw",

            "@media (max-width:600px)": {
              alignItems: "flex-end",
              display: "flex",
              flexDirection: "column",
              mr: 0,
              width: "30vw",
            },
          }}
        >
          {/* <Typography
            sx={{
              color: color ?? COLORS.primary.white,
              textDecoration: route === "/about" ? "underline" : "none",

              "&:hover": {
                textDecoration: "underline",
              },
            }}
            variant="body2"
          >
            <Link href="/about">About Us </Link>
          </Typography> */}
          {bottom && (
            <div style={{ textAlign: "right" }}>
              <Typography
                sx={{
                  color: color ?? COLORS.primary.white,
                  textDecoration: route === "/portfolio" ? "underline" : "none",

                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                variant="body2"
              >
                <Link href="mailto:zoe.a.h.davidson@gmail.com">
                  zoe.a.h.davidson@gmail.com
                </Link>
              </Typography>
              <Typography
                sx={{
                  color: color ?? COLORS.primary.white,
                  textDecoration: route === "/portfolio" ? "underline" : "none",

                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                variant="body2"
              >
                <Link href="mailto:zoe.a.h.davidson@gmail.com">
                  (440) 453 - 1744
                </Link>
              </Typography>
            </div>
          )}
          <Typography
            sx={{
              color: color ?? COLORS.primary.white,
              textDecoration: route === "/portfolio" ? "underline" : "none",

              "&:hover": {
                textDecoration: "underline",
              },
            }}
            variant="body2"
          >
            <Link href="https://vimeo.com/zoedavidson" target="_blank">
              Portfolio
            </Link>
          </Typography>

          <Typography
            sx={{
              color: color ?? COLORS.primary.white,
              mx: 1,
              textDecoration: route === "/about/contact" ? "underline" : "none",

              "&:hover": {
                textDecoration: "underline",
              },

              "@media (min-width:600px)": {
                display: "none",
                flexDirection: "column",
              },
            }}
            variant="body2"
          >
            <Link href="mailto:zoe.a.h.davidson@gmail.com">Contact </Link>
          </Typography>

          <Button
            color={color}
            onClick={() => router.push("mailto:zoe.a.h.davidson@gmail.com")}
            sx={{
              "&:hover": {
                color: color ? COLORS.primary.black : COLORS.primary.white,
              },

              "@media (max-width:600px)": {
                display: "none",
                flexDirection: "column",
              },
            }}
          >
            <Typography
              sx={{
                alignItems: "center",
                color: color ?? COLORS.primary.white,
                display: "flex",
                "&:hover": {
                  color: color ? COLORS.primary.black : COLORS.primary.white,
                },
              }}
              variant="body2"
            >
              Contact Us
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
