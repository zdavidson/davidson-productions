import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Button from "../../components/button";
import Navigation from "../../components/navigation";
import OutlinedButton from "../../components/outlined-button";

const Academy = () => {
  const router = useRouter();
  return (
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
              onClick={() => router.push("/academy/contact")}
              sx={{ ml: 4, py: 1, px: 2 }}
            >
              <Typography variant="body2">Learn More</Typography>
            </OutlinedButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Academy;
