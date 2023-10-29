import React from "react";
import { Box } from "@mui/material";
import outlet from "./outllet.png";

const Location = () => {
  const styles = {
    locate: {
      marginTop: "60px",
      margin: "0 auto",
      textAlign: "center",
    },
    image: {
      width: "100%",
      maxWidth: "1110px",
      height: "auto",
    },
  };

  return (
    <Box sx={styles.locate}>
      <img src={outlet} alt="Outlet" style={styles.image} />
    </Box>
  );
};

export default Location;
