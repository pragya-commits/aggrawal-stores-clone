import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Header1 = () => {
  const styles = {
    mainheaddiv: {
      display: "flex",
      justifyContent: "space-between",
    },
  };

  return (
    <div>
      {/* div---> Box */}
      {/* className---> sx */}
      <Box sx={styles.mainheaddiv}>
        <Box>LOGO</Box>

        <Box>
          {/* (h1-h6,p,span)----> Typography */}
          <Typography> CONTACT US</Typography>
          <Typography> FIND NEAREST STORE</Typography>
          <Typography> ORDER ONLINE</Typography>
          {/* button---> Button */}
          <Button variant="outlined">Sign In</Button>
        </Box>
      </Box>
    </div>
  );
};

export default Header1;
