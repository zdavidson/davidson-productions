import { Box, Container, Typography } from "@mui/material";
import Navigation from "../../components/navigation";
import Image from "next/image";
import { COLORS } from "../../styles/theme/lightThemeOptions";
import Head from "next/head";

const About = () => {
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
                <Typography>
                  Davidson Programming is a small but mighty team spearheaded by
                  software engineer{" "}
                  <a
                    target="_blank"
                    href="https://github.com/zdavidson"
                    rel="noreferrer"
                  >
                    <span
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      Zoë Davidson
                    </span>
                    .
                  </a>
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
