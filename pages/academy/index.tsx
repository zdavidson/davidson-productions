import {
  Box,
  Container,
  Divider,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import Button from "../../components/button";
import Navigation from "../../components/navigation";
import OutlinedButton from "../../components/outlined-button";
import Image from "next/image";
import { COLORS } from "../../styles/theme/lightThemeOptions";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Head from "next/head";

const Academy = () => {
  const router = useRouter();

  const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: COLORS.primary.black,
      border: "2px solid black",
      color: COLORS.primary.white,
      fontSize: 16,
    },
  }));

  return (
    <>
      <Head>
        <title>Davidson Programming Academy</title>
        <meta
          name="description"
          content="Davidson Programming Academy. A coding bootcamp alternative."
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
                <br></br>
                <br></br> <b>Next cohort begins: January 9th, 2023</b>
              </Typography>
            </Box>
            <Box sx={{ mt: 6 }}>
              <Button
                onClick={() =>
                  router.push("https://zoedavidson.gumroad.com/l/bootcamp")
                }
              >
                <Typography variant="body2">Enroll Now</Typography>
              </Button>
              <OutlinedButton
                onClick={() =>
                  scroll({ top: 900, left: 0, behavior: "smooth" })
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
                  <StyledTooltip
                    title="Each student receives bi-weekly meetings with their mentor"
                    placement="top-end"
                  >
                    <span>1-1 Mentors</span>
                  </StyledTooltip>
                  <br></br>{" "}
                  <StyledTooltip
                    title="Students will be get hands on experience with coding in class"
                    placement="top-end"
                  >
                    <span>In-depth classes</span>
                  </StyledTooltip>
                  <br></br>
                  <StyledTooltip
                    title="Students will be guided through interview prep as well as multiple mock interview sessions"
                    placement="top-end"
                  >
                    <span>Interview Training</span>
                  </StyledTooltip>
                  <br></br>{" "}
                  <StyledTooltip
                    title="Each cohort with be able to communicate and work through problems as a group, as well as join the larger Davidson Programming community"
                    placement="top-end"
                  >
                    <span>Community</span>
                  </StyledTooltip>
                  <br></br>
                  <StyledTooltip
                    title="Each 90-day session has a limited number of seats to ensure that students get individual attention and personalized recommendations"
                    placement="top-end"
                  >
                    <span>Limited Enrollment</span>
                  </StyledTooltip>
                  <br></br>{" "}
                  <StyledTooltip
                    title="Try us out for 14 days and see if it's a good fit. Scroll down for more details."
                    placement="top-end"
                  >
                    <span>14-Day Trial*</span>
                  </StyledTooltip>
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                  <Button
                    onClick={() =>
                      router.push("https://zoedavidson.gumroad.com/l/bootcamp")
                    }
                  >
                    <Typography variant="body2">Enroll Now</Typography>
                  </Button>
                  <OutlinedButton
                    onClick={() =>
                      scroll({ top: 1800, left: 0, behavior: "smooth" })
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
                  Our program costs $1500, which is only a tenth of what the
                  average US coding bootcamp costs. Why? We’re not here to make
                  a profit, we’re here to make you succeed in your career.
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
                  Porfolio with <i>at least</i> 3 projects<br></br>
                  Lifetime community access<br></br>
                  <span
                    onClick={() =>
                      scroll({ top: 2500, left: 0, behavior: "smooth" })
                    }
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Money Back Guarantee*
                  </span>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                <Button
                  onClick={() =>
                    router.push("https://zoedavidson.gumroad.com/l/bootcamp")
                  }
                >
                  <Typography variant="body2">Enroll Now</Typography>
                </Button>
                <OutlinedButton
                  onClick={() =>
                    scroll({ top: 2700, left: 0, behavior: "smooth" })
                  }
                  sx={{ ml: 4, py: 1, px: 2 }}
                >
                  <Typography id="the-course" variant="body2">
                    Learn More
                  </Typography>
                </OutlinedButton>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
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
            <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
              <Button
                onClick={() =>
                  router.push("https://zoedavidson.gumroad.com/l/bootcamp")
                }
              >
                <Typography variant="body2">Enroll Now</Typography>
              </Button>
              <OutlinedButton
                onClick={() => router.push("/academy/contact")}
                sx={{ ml: 4, py: 1, px: 2 }}
              >
                <Typography id="the-course" variant="body2">
                  Contact Us
                </Typography>
              </OutlinedButton>
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

export default Academy;
