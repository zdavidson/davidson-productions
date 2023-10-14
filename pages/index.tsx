import {
  Box,
  Container,
  FormControl,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/button";
import Navigation from "../components/navigation";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import { BaseSyntheticEvent, FormEvent } from "react";
import { send } from "emailjs-com";
import React from "react";
import { COLORS } from "../styles/theme/lightThemeOptions";
import Link from "next/link";
import OutlinedButton from "../components/outlined-button";

const Home: NextPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    send(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      { message: e.target.email.value },
      process.env.NEXT_PUBLIC_USER_ID!
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setOpen(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <>
      <Head>
        <title>Davidson Productions</title>
        <meta
          name="description"
          content="Davidson Productions. A Washington, DC film production company."
        />
        <meta name="robots" content="index" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/web-programming.png" />
      </Head>
      <video
        autoPlay
        muted
        loop
        style={{
          zIndex: -1,
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
        }}
      >
        <source src="/2020_Website_Background.mp4" type="video/mp4" />
      </video>
      <Container maxWidth="xl" sx={{ backgroundColor: "transparent" }}>
        <Box
          sx={{
            mt: 5,
            backgroundColor: "transparent",
            "@media (min-width:600px)": {
              mx: 12,
            },
          }}
        >
          <Navigation color={COLORS.primary.white} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              my: 14,

              "@media (max-width:600px)": {
                my: 10,
              },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  color: COLORS.primary.white,
                  textAlign: "center",
                }}
                variant="h2"
              >
                Your Great Idea.<br></br>
                <mark>Our Cameras.</mark>
              </Typography>
              <Box
                sx={{
                  mt: 4,
                  "@media (min-width:600px)": {
                    ml: 2,
                    width: "38vw",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: COLORS.primary.white,
                    textAlign: "center",
                  }}
                >
                  Work with our team of world-class cinematographers, producers,
                  and editors to bring your next film, commercial, or idea to
                  life.
                </Typography>
              </Box>
              <br></br>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link
                  href="mailto:zoe.a.h.davidson@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    sx={{
                      ml: 2,
                      maxWidth: "20rem",
                      alignSelf: "center",
                      color: COLORS.primary.white,
                      "@media (max-width:600px)": {
                        flexDirection: "column",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        color: COLORS.primary.white,
                        "&:hover": {
                          color: COLORS.primary.black,
                        },
                      }}
                      variant="body2"
                    >
                      Get a Quote
                    </Typography>
                  </Button>
                </Link>
                <Link
                  href="https://vimeo.com/zoedavidson"
                  target="_blank"
                  rel="noreferrer"
                >
                  <OutlinedButton
                    color={COLORS.primary.white}
                    sx={{
                      ml: 2,
                      py: 1,
                      maxWidth: "20rem",
                      alignSelf: "center",
                      "@media (max-width:600px)": {
                        flexDirection: "column",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        color: COLORS.primary.white,
                        "&:hover": {
                          color: COLORS.primary.black,
                        },
                      }}
                      variant="body2"
                    >
                      See Our Work
                    </Typography>
                  </OutlinedButton>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          alignItems: "center",
          backgroundColor: COLORS.primary.black,
          display: "flex",
          height: "30vh",
          marginTop: "15rem",
          width: "100%",

          "@media (max-width:600px)": {
            marginTop: "0",
          },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              mt: 5,

              "@media (min-width:600px)": {
                mx: 12,
              },
            }}
          >
            <Navigation color="white" sx={{ borderBottom: "none" }} bottom />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
