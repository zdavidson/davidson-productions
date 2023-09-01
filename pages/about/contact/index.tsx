import {
  Box,
  Container,
  FormControl,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { BaseSyntheticEvent, FormEvent } from "react";
import Navigation from "../../../components/navigation";
import Button from "../../../components/outlined-button";
import Image from "next/image";
import { send } from "emailjs-com";
import { COLORS } from "../../../styles/theme/lightThemeOptions";
import React from "react";
import Head from "next/head";
import Link from "next/link";

const Contact = () => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    send(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_ACADEMY_TEMPLATE_ID!,
      {
        name: e.target.name.value,
        project: e.target.project?.value,
        email: e.target.email.value,
      },
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
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              my: 12,
            }}
          >
            <Box>
              <Typography
                sx={{
                  "@media (max-width:600px)": {
                    textAlign: "center",
                    width: "90vw",
                  },
                }}
                variant="h2"
              >
                Interested?<br></br>Let&apos;s Talk.
              </Typography>
              <br></br>
              <Typography
                sx={{
                  width: "38vw",
                  "&:hover": { cursor: "pointer" },

                  "@media (max-width:600px)": {
                    textAlign: "center",
                    width: "90vw",
                  },
                }}
              >
                Book a free 15-minute consultation with us, so we can start
                improving your conversions, today.{" "}
              </Typography>
              <br></br>
              <Link
                href="https://calendly.com/davidsonprogramming/free-consultation"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  sx={{
                    "@media (max-width:600px)": {
                      flexDirection: "column",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      alignItems: "center",
                      display: "flex",
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
                    alignItems: "center",
                    display: "flex",
                    "@media (min-width:600px)": {
                      border: `1px solid ${COLORS.primary.black}`,
                      borderRadius: 2,
                      ml: 1,
                      p: 5,
                    },
                    flexDirection: "column",
                    justifyContent: "center",
                    mt: 6,

                    "@media (max-width:600px)": {
                      alignItems: "flex-start",
                    },
                  }}
                >
                  <Box>
                    <TextField
                      id="name"
                      label="Name"
                      name="name"
                      sx={{
                        borderRadius: 2,
                        m: 1,
                        "@media (max-width:600px)": {
                          width: "85vw",
                        },
                      }}
                      required
                    />
                    <TextField
                      id="email"
                      label="Email"
                      name="email"
                      sx={{
                        borderRadius: 2,
                        m: 1,
                        width: 250,

                        "@media (max-width:600px)": {
                          width: "85vw",
                        },
                      }}
                      required
                    />
                  </Box>

                  <TextField
                    id="project"
                    label="Project Details"
                    name="project"
                    sx={{
                      borderRadius: 2,
                      m: 1,
                      "@media (max-width:600px)": {
                        width: "85vw",
                      },
                    }}
                    multiline
                  />

                  <Button
                    sx={{
                      mt: 2,
                      "@media (max-width:600px)": {
                        ml: 1,
                        width: "85vw",
                      },
                    }}
                    type="submit"
                  >
                    <Typography
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        m: 1,
                      }}
                      variant="body2"
                    >
                      Submit
                    </Typography>
                  </Button>
                </Box>
              </FormControl> */}
              <Snackbar open={open} autoHideDuration={4000} message="Sent!" />
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

export default Contact;
