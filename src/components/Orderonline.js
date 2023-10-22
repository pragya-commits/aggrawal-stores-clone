import React from "react";
import online from "./orderimage.png";
import { Box, Button, Typography } from "@mui/material";
const Orderonline = () => {
  const styles = {};

  return (
    <Box sx={styles.mainorderdiv}>
      {/* content of herosection starts */}
      <Box sx={styles.ordersection}>
        {/* left side content */}
        <Typography sx={styles.online}>
          Fight With<br></br>
          Covid-19<br></br>
          Order Online.
        </Typography>
        <Button sx={styles.btn} variant="outlined">
          Shop Now
        </Button>
      </Box>
      {/* right side content */}
      <Box sx={styles.rightimage}>
        <img src={online} width={526.39} height={498.29} />
      </Box>
    </Box>
  );
};
export default Orderonline;
