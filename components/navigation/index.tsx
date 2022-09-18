import { Box, Typography } from "@mui/material";
import Button from "../outlined-button";
import Logo from "../logo";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Navigation = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          color: "#FFF",
          justifyContent: "space-between",
          width: "38vw",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            mr: 0,
            width: "36vw",
          }}
        >
          <Typography variant="body2">About Us</Typography>
          <Typography variant="body2">Portfolio</Typography>
          <Typography variant="body2">Academy</Typography>
        </Box>
        {/*         
        <Button>
          <Typography
            sx={{ alignItems: "center", display: "flex" }}
            variant="body2"
          >
            Contact Us <ArrowRightAltIcon />
          </Typography>
        </Button> */}
      </Box>
    </Box>
  );
};

export default Navigation;
