import { Box, Container, LinearProgress, styled, Tooltip } from "@mui/material";
import { Router, useRouter } from "next/router";
import Button from "../../components/button";
import Navigation from "../../components/navigation";
import OutlinedButton from "../../components/outlined-button";
import Image from "next/image";
import { COLORS } from "../../styles/theme/lightThemeOptions";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Head from "next/head";
import Logo from "../../components/logo";
import Script from "next/script";
import React from "react";

function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("669914231828608");
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

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
      <FacebookPixel />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-JY7XB87G7C"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-JY7XB87G7C');
        `,
        }}
      />
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
          <LinearProgress
            color="inherit"
            sx={{
              mt: 6,
              width: "30vw",
              "@media (max-width:600px)": {
                mt: 3,
                width: "80vw",
              },
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default Academy;
