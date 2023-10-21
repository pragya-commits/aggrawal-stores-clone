import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Logo1 from "./aggrawal stores logo.png";

const Header1 = () => {
  const styles = {
    mainheaddiv: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "50px",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    navitem: {
      marginRight: "20px",
    },
    btn: {
      paddingRight: "25px",
      paddingLeft: "25px",
    },
  };

  return (
    <div>
      {/* div---> Box */}
      {/* className---> sx */}
      <Box sx={styles.mainheaddiv}>
        <Box>
          <img src={Logo1} width={90} height={50} />
        </Box>

        <Box sx={styles.navbar}>
          {/* (h1-h6,p,span)----> Typography */}
          <Typography sx={styles.navitem}> CONTACT US</Typography>
          <Typography sx={styles.navitem}> FIND NEAREST STORE</Typography>
          <Typography sx={styles.navitem}> ORDER ONLINE</Typography>
          {/* button---> Button */}
          <Button sx={styles.btn} variant="outlined">
            Sign In
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Header1;
