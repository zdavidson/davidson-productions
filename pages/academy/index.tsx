import { Box, Container, Divider, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Button from "../../components/button";
import Navigation from "../../components/navigation";
import OutlinedButton from "../../components/outlined-button";
import Image from "next/image";
import { COLORS } from "../../styles/theme/lightThemeOptions";
import Link from "next/link";

const Academy = () => {
  const router = useRouter();

  return (
    <>
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
              Change your life.<br></br>In 90 days.
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
                At Davidson Programming Academy, you’ll learn how to become a
                top-class developer and land a job in the tech industry.
              </Typography>
            </Box>
            <Box sx={{ mt: 6 }}>
              <Button onClick={() => router.push("/academy/contact")}>
                <Typography variant="body2">Get Started</Typography>
              </Button>
              <OutlinedButton
                onClick={() =>
                  scroll({ top: 800, left: 0, behavior: "smooth" })
                }
                sx={{ ml: 4, py: 1, px: 2 }}
              >
                <Typography id="the-course" variant="body2">
                  Learn More
                </Typography>
              </OutlinedButton>
            </Box>
          </Box>
          <hr style={{ borderTop: "#D2D2D2" }}></hr>

          {/* The Course */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              my: 18,
            }}
          >
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
            <Box>
              <Typography
                align="center"
                sx={{
                  "@media (max-width:600px)": {
                    width: "90vw",
                  },
                }}
                variant="h2"
              >
                The Course
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
                  Our instructors and mentors will guide you through our program
                  designed to land you a job as a front-end developer.
                </Typography>
                <Typography align="left" sx={{ mt: 4 }}>
                  The program features:
                </Typography>
                <Typography
                  align="center"
                  sx={{ mt: 2, lineHeight: 2 }}
                  variant="body2"
                >
                  1-1 Mentors<br></br> In-depth classes<br></br> Interview
                  Training<br></br> Community<br></br> 14-Day Trial*
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                  <Button onClick={() => router.push("/academy/contact")}>
                    <Typography variant="body2">Get Started</Typography>
                  </Button>
                  <OutlinedButton
                    onClick={() =>
                      scroll({ top: 1700, left: 0, behavior: "smooth" })
                    }
                    sx={{ ml: 4, py: 1, px: 2 }}
                  >
                    <Typography id="the-course" variant="body2">
                      Learn More
                    </Typography>
                  </OutlinedButton>
                </Box>
              </Box>
            </Box>
          </Box>
          <hr style={{ borderTop: "#D2D2D2" }}></hr>

          {/* Price */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              my: 18,
            }}
          >
            <Box>
              <Typography
                align="center"
                sx={{
                  "@media (max-width:600px)": {
                    width: "90vw",
                  },
                }}
                variant="h2"
              >
                Price
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
                  Our program costs only a tenth of what the average US coding
                  bootcamp costs. Why? We’re not here to make a profit, we’re
                  here to make you succeed in your career.
                </Typography>
                <Typography align="left" sx={{ mt: 4 }}>
                  This includes:
                </Typography>
                <Typography
                  align="center"
                  sx={{ mt: 2, lineHeight: 2 }}
                  variant="body2"
                >
                  Bi-Weekly Meetings with your mentor<br></br>
                  Frontend certificate<br></br>
                  Porfolio with 3 projects<br></br>
                  Lifetime community access<br></br>
                  <span
                    onClick={() =>
                      scroll({ top: 2400, left: 0, behavior: "smooth" })
                    }
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Money Back Guarantee*
                  </span>
                </Typography>
                <Typography align="right" sx={{ mt: 4 }}>
                  Total Cost: $1500{" "}
                </Typography>
              </Box>
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
          <hr style={{ borderTop: "#D2D2D2" }}></hr>

          {/* Our Guarantee */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              my: 18,
            }}
          >
            <Typography
              align="center"
              sx={{
                "@media (max-width:600px)": {
                  width: "90vw",
                },
              }}
              variant="h2"
            >
              Our Guarantee
            </Typography>
            <Typography
              align="center"
              sx={{
                mt: 5,
                width: "50vw",
                "@media (max-width:600px)": {
                  width: "90vw",
                  mt: 2,
                },
              }}
            >
              If you successfully finish everything in the course, follow our
              job application program, and still don’t get at least one job
              offer within a year of completing the program, have your money
              refunded to you, no questions asked. <br></br>
              <br></br> You can also try our program free for 14-days. What’s
              there to lose?
            </Typography>
            <Button
              onClick={() => router.push("/academy/contact")}
              sx={{ mt: 6 }}
            >
              <Typography variant="body2">Enroll Now</Typography>
            </Button>
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

export default Academy;
