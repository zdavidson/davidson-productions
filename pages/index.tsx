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
        <title>Davidson Programming</title>
        <meta
          name="description"
          content="Davidson Programming. A full stack web development company."
        />
        <meta name="robots" content="index, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/web-programming.png" />
      </Head>
      <Container maxWidth="xl">
        <Box
          sx={{
            mt: 5,

            "@media (min-width:600px)": {
              mx: 12,
            },
          }}
        >
          <Navigation />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              my: 14,

              "@media (max-width:600px)": {
                my: 10,
              },
            }}
          >
            <Box>
              {/* <Typography
                sx={{
                  "@media (max-width:600px)": {
                    textAlign: "center",
                    width: "90vw",
                  },
                }}
                variant="h2"
              >
                Develop your site.<br></br>Your way.
              </Typography> */}
              <Typography
                sx={{
                  ml: 2,
                  "@media (max-width:600px)": {
                    textAlign: "center",
                    width: "90vw",
                  },
                }}
                variant="h2"
              >
                Better SEO.<br></br>More conversions.<br></br>More sales.
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
                    "@media (max-width:600px)": {
                      textAlign: "center",
                    },
                  }}
                >
                  Work with our team of world-class designers, developers, and
                  content creators to develop or improve your business’ web
                  presence.
                </Typography>
              </Box>
              <br></br>
              <Link
                href="https://calendly.com/davidsonprogramming/free-consultation"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  sx={{
                    ml: 2,
                    "@media (max-width:600px)": {
                      flexDirection: "column",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      "&:hover": {
                        color: COLORS.primary.black,
                      },
                    }}
                    variant="body2"
                  >
                    Book a Free Consultation
                  </Typography>
                </Button>
              </Link>
              {/* <FormControl>
                <Box
                  component="form"
                  onSubmit={(e: FormEvent<HTMLDivElement>) => handleSubmit(e)}
                  sx={{
                    display: "flex",
                    "@media (min-width:600px)": {
                      ml: 2,
                    },
                    "@media (max-width:600px)": {
                      alignItems: "flex-start",
                      display: "flex",
                      flexDirection: "column",
                    },
                    mt: 6,
                  }}
                >
                  <Button
                    sx={{
                      mr: 4,

                      "@media (max-width:600px)": {
                        width: "90vw",
                      },
                    }}
                    type="submit"
                  >
                    <Typography
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                      variant="body2"
                    >
                      Request a free consult{" "}
                      <ArrowRightAltIcon sx={{ fontSize: "large", ml: 1 }} />
                    </Typography>
                  </Button>
                  <TextField
                    id="email"
                    name="email"
                    placeholder="Your email address..."
                    sx={{
                      borderRadius: 2,
                      "@media (max-width:600px)": {
                        mt: 2,
                        width: "90vw",

                        "#email": {
                          textAlign: "center",
                        },
                      },
                    }}
                    required
                  />
                </Box>
                <Snackbar open={open} autoHideDuration={4000} message="Sent!" />
              </FormControl> */}
            </Box>
            <Box
              sx={{
                "@media (max-width:600px)": {
                  display: "none",
                },
              }}
            >
              <Image
                alt="user-with-laptop"
                src="/laptop.jpg"
                height={521}
                width={400}
              />
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
          width: "100%",
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
            <Navigation color="white" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
