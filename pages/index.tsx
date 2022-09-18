import { Box, FormControl, TextField, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/button";
import Navigation from "../components/navigation";
import styles from "../styles/Home.module.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import { BaseSyntheticEvent, FormEvent } from "react";
import { send } from "emailjs-com";

const Home: NextPage = () => {
  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    send(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      { message: e.target.email.value },
      process.env.NEXT_PUBLIC_USER_ID!
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Davidson Programming</title>
        <meta
          name="description"
          content="Davidson Programming. A full stack web development company."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ mt: 5, mx: 12 }}>
        <Navigation />
        <Box sx={{ display: "flex", justifyContent: "space-between", my: 18 }}>
          <Box>
            <Typography variant="h2">
              Develop your site.<br></br>Your way.
            </Typography>
            <Box sx={{ ml: 2, mt: 4, width: 550 }}>
              <Typography>
                Work with our team of world-class designers, developers, and
                content creators to develop or improve your business’s web
                presence.
              </Typography>
            </Box>
            <FormControl>
              <Box
                component="form"
                onSubmit={(e: FormEvent<HTMLDivElement>) => handleSubmit(e)}
                sx={{
                  display: "flex",
                  ml: 2,
                  mt: 6,
                }}
              >
                <Button sx={{ mr: 4 }} type="submit">
                  <Typography
                    sx={{ alignItems: "center", display: "flex" }}
                    variant="body2"
                  >
                    Request a free consult{" "}
                    <ArrowRightAltIcon sx={{ fontSize: "large", ml: 1 }} />
                  </Typography>
                </Button>
                <TextField
                  id="email"
                  name="email"
                  placeholder="Your email address..."
                  sx={{ borderRadius: 2 }}
                />
              </Box>
            </FormControl>
          </Box>
          <Box>
            <Image
              alt="user-with-laptop"
              src="/laptop.jpg"
              height={521}
              width={400}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
