import { Box, Container, Typography } from "@mui/material";
import Navigation from "../../components/navigation";

const About = () => {
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
            Coming Soon
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
