import { Box, Typography } from "@mui/material";
import Button from "../outlined-button";
import Logo from "../logo";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useRouter } from "next/router";
import Link from "next/link";

const Navigation = () => {
  const router = useRouter();
  const route = router.route;

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          width: "38vw",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            mr: 0,
            width: "25vw",

            "@media (max-width:600px)": {
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <Typography variant="body2">
            <Link href="/about">About Us </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/about">Portfolio </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/academy">Academy </Link>
          </Typography>
        </Box>

        <Button
          onClick={
            route.startsWith("/academy")
              ? () => router.push("/academy/contact")
              : null
          }
          sx={{
            "@media (max-width:600px)": {
              display: "none",
              flexDirection: "column",
            },
          }}
        >
          <Typography
            sx={{ alignItems: "center", display: "flex" }}
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
