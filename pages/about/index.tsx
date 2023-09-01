import { Box, Container, Typography } from "@mui/material";
import Navigation from "../../components/navigation";
import Image from "next/image";
import { COLORS } from "../../styles/theme/lightThemeOptions";
import Head from "next/head";
import Button from "../../components/outlined-button";
import { useRouter } from "next/router";
import Link from "next/link";

const About = () => {
  const router = useRouter();
  const route = router.route;
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
              justifyContent: "space-evenly",
              my: 18,
              "@media (max-width:600px)": {
                alignItems: "center",
                flexDirection: "column",
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  ml: 2,
                  "@media (max-width:600px)": {
                    ml: 0,
                    textAlign: "center",
                    width: "90vw",
                  },
                }}
                variant="h2"
              >
                About Us
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
                  Davidson Programming is a team spearheaded by software
                  engineer,{" "}
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/zo%C3%ABdavidson/"
                    rel="noreferrer"
                  >
                    <b>
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Zoë Davidson
                      </span>
                    </b>
                    .
                  </a>
                  <br></br>
                  <br></br>
                  Our team specializes in taking businesses to the next level by
                  improving their web presence through enhancing <b>SEO</b>,
                  implementing eye-catching <b>ad content</b>, and increasing
                  quality <b>lead generation</b>.<br></br>
                  <br></br>
                  We use tried and tested methods to achieve measurable results,
                  and
                  <br></br>
                  <br></br>
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
                        color: COLORS.primary.black,
                        display: "flex",
                        "&:hover": {
                          color: COLORS.primary.white,
                        },
                      }}
                      variant="body2"
                    >
                      <Link
                        href="https://calendly.com/davidsonprogramming/free-consultation"
                        target="_blank"
                      >
                        Book a Free Consultation
                      </Link>
                    </Typography>
                  </Button>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                "@media (max-width:600px)": {
                  mt: 6,
                },
              }}
            >
              <Image
                alt="programmer"
                src="/about-img.jpg"
                height={521}
                width={350}
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

export default About;
