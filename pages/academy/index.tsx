import { Box, Container, styled, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import Button from "../../components/button";
import Navigation from "../../components/navigation";
import OutlinedButton from "../../components/outlined-button";
import Image from "next/image";
import { COLORS } from "../../styles/theme/lightThemeOptions";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Head from "next/head";
import Logo from "../../components/logo";

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
        <meta
          httpEquiv="refresh"
          content="0; URL=https://davidson-programming-academy.thinkific.com/courses/front-end-developer"
        />

        <link rel="icon" href="/web-programming.png" />
      </Head>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            my: "35vh",
          }}
        >
          <Logo width={100} height={90} variant="h2" marginLeft={5} />
        </Box>
      </Container>
    </>
  );
};

export default Academy;
