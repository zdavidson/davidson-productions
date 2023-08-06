import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Navigation from "../../components/navigation";
import { COLORS } from "../../styles/theme/lightThemeOptions";

const About = () => {
  const router = useRouter();
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
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              my: 18,
            }}
          >
            <Typography
              align="center"
              variant="h2"
              sx={{
                "@media (max-width:600px)": {
                  width: "90vw",
                },
              }}
            >
              Portfolio
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
              <Typography align="center">
                We’ve worked on some pretty cool projects. Here’s a small
                selection:
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 10,

                "@media (max-width:600px)": {
                  alignItems: "center",
                  flexDirection: "column",
                },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#1a1a1a",
                  display: "flex",
                  alignItems: "center",
                  height: 250,
                  width: 250,
                  mr: 8,

                  "@media (max-width:600px)": {
                    my: 1,
                    mr: 0,
                  },
                }}
              >
                <a
                  href="https://audiophile-seven.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="programmer"
                    src="/audiophile.png"
                    height={150}
                    width={390}
                  />
                </a>
              </Box>
              <Box
                onClick={() => router.push("https://stacklet.io/")}
                sx={{
                  alignItems: "center",
                  backgroundColor: "black",
                  display: "flex",

                  px: 2,
                  height: 250,
                  width: 250,

                  "@media (max-width:600px)": {
                    my: 1,
                  },
                }}
              >
                <a href="https://stacklet.io/" target="_blank" rel="noreferrer">
                  <Image
                    alt="programmer"
                    src="/stacklet.png"
                    height={75}
                    width={238}
                  />
                </a>
              </Box>
              <Box
                sx={{
                  mx: 8,
                  height: 250,
                  width: 250,
                  "@media (max-width:600px)": {
                    my: 1,
                  },
                }}
              >
                <a
                  href="https://www.joincombo.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="programmer"
                    src="/combo-clips.png"
                    height={250}
                    width={250}
                  />
                </a>
              </Box>
              <Box
                sx={{
                  backgroundColor: COLORS.primary.black,
                  height: 250,
                  width: 250,
                  px: 2,
                  "@media (max-width:600px)": {
                    my: 1,
                  },
                }}
              >
                <a
                  href="https://www.novelly.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="programmer"
                    src="/logo-dark.svg"
                    height={250}
                    width={225}
                  />
                </a>
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
