import React from "react";
import { Box, Button, Hidden, Typography } from "@mui/material";
import Logo1 from "../assets/images/aggrawal stores logo.png";
import { FaUserAlt } from "react-icons/fa";

const Header1 = () => {
  const styles = {
    mainheaddiv: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 50px",
      margin: "12px 0",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    navitem: {
      marginRight: "30px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "black",
        color: "white",
        borderRadius: "40px",
        padding: "15px",
        fontWeight: "800",
      },
    },
    btn: {
      padding: "8px 35px",
      fontSize: "18px",
      fontWeight: "700",
      bordermaxwidth: "5px",
      borderRadius: "10px",
      "&:hover": {
        backgroundColor: "#007bff",
        color: "white",
      },
    },
    logo: {
      width: "100px",
      height: "50px",
    },
  };

  return (
    <Box sx={styles.mainheaddiv}>
      <Box>
        <img src={Logo1} alt="Aggrawal Stores Logo" sx={styles.logo} />
      </Box>

      <Hidden mdDown>
        <Box sx={styles.navbar}>
          <Typography variant="h6" sx={styles.navitem}>
            CONTACT US
          </Typography>
          <Typography variant="h6" sx={styles.navitem}>
            FIND NEAREST STORE
          </Typography>
          <Typography variant="h6" sx={styles.navitem}>
            ORDER ONLINE
          </Typography>
          <Button sx={styles.btn} variant="outlined">
            SIGNUP
            <FaUserAlt sx={{ marginLeft: "10px" }} />
          </Button>
        </Box>
      </Hidden>
    </Box>
  );
};

export default Header1;
