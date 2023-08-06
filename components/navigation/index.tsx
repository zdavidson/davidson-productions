import { Box, Typography } from "@mui/material";
import Button from "../outlined-button";
import Logo from "../logo";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useRouter } from "next/router";
import Link from "next/link";
import SchoolIcon from "@mui/icons-material/School";
import { COLORS } from "../../styles/theme/lightThemeOptions";

interface Props {
  color?: string;
}

const Navigation = ({ color }: Props) => {
  const router = useRouter();
  const route = router.route;

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Logo color={color} />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          width: route.startsWith("/academy") ? "42vw" : "38vw",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            mr: route.startsWith("/academy") ? 2 : 0,
            width: route.startsWith("/academy") ? "30vw" : "25vw",

            "@media (max-width:600px)": {
              alignItems: "flex-end",
              display: "flex",
              flexDirection: "column",
              mr: 0,
              width: "30vw",
            },
          }}
        >
          <Typography
            sx={{
              color: color ?? COLORS.primary.black,
              textDecoration: route === "/about" ? "underline" : "none",

              "&:hover": {
                textDecoration: "underline",
              },
            }}
            variant="body2"
          >
            <Link href="/about">About Us </Link>
          </Typography>
          <Typography
            sx={{
              color: color ?? COLORS.primary.black,
              textDecoration: route === "/portfolio" ? "underline" : "none",

              "&:hover": {
                textDecoration: "underline",
              },
            }}
            variant="body2"
          >
            <Link href="/portfolio">Portfolio </Link>
          </Typography>
          {route.startsWith("/academy") ? (
            <Typography
              sx={{
                color: color ?? COLORS.primary.black,
                mx: 1,
                textDecoration:
                  route === "/academy/contact" ? "underline" : "none",

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              variant="body2"
            >
              <Link href="/academy/contact">Contact </Link>
            </Typography>
          ) : (
            <Typography
              sx={{
                color: color ?? COLORS.primary.black,
                mx: 1,
                textDecoration:
                  route === "/about/contact" ? "underline" : "none",

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
              <Link href="/about/contact">Contact </Link>
            </Typography>
          )}
          <Typography
            sx={{
              alignItems: "center",
              color: color ?? COLORS.primary.black,
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              textDecoration: route === "/academy" ? "underline" : "none",

              "&:hover": {
                textDecoration: "underline",
              },
            }}
            variant="body2"
          >
            <Link href="/academy">Academy</Link>
            <SchoolIcon sx={{ ml: 1 }} />
          </Typography>
        </Box>

        <Button
          color={color}
          onClick={
            route.startsWith("/academy")
              ? () =>
                  router.push(
                    "https://davidson-programming-academy.thinkific.com/courses/front-end-developer"
                  )
              : () => router.push("/about/contact")
          }
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
              color: color ?? COLORS.primary.black,
              display: "flex",
              "&:hover": {
                color: color ? COLORS.primary.black : COLORS.primary.white,
              },
            }}
            variant="body2"
          >
            {route.startsWith("/academy") ? "Enroll Now" : "Contact Us"}{" "}
            <ArrowRightAltIcon />
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Navigation;
