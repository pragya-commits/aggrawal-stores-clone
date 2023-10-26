import { Box, Button, Typography } from "@mui/material";
import React from "react";
// import Logo1 from "./aggrawal stores logo.png";
import Logo1 from "../assets/images/aggrawal stores logo.png";
import contact1 from "./contact image.png";

const Header1 = () => {
  const styles = {
    mainheaddiv: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "50px",
      marginRight: "50px",
      marginTop: "12px",
      marginBottom: "12px",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    navitem: {
      marginRight: "30px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "black",
        color: "white",
        borderRadius: "40px",
        padding: "15px",
        fontWeight: "800",
      },
    },
    btn: {
      paddingRight: "35px",
      paddingLeft: "35px",
      paddingTop: "8px",
      paddingBottom: "8px",
      fontSize: "18px",
      fontWeight: "700",
      bordermaxwidth: "5px",
      borderRadius: "10px",

      ":hover": {
        backgroundColor: "#007bff",
        color: "white",
      },
    },
    contact1: {
      marginRight: "5px",
    },
  };

  return (
    <div>
      {/* div---> Box */}
      {/* className---> sx */}
      <Box sx={styles.mainheaddiv}>
        <Box>
          <img src={Logo1} width={100} height={50} />
        </Box>

        <Box sx={styles.navbar}>
          {/* (h1-h6,p,span)----> Typography */}
          <Typography sx={styles.navitem}> CONTACT US</Typography>
          <Typography sx={styles.navitem}> FIND NEAREST STORE</Typography>
          <Typography sx={styles.navitem}> ORDER ONLINE</Typography>
          {/* button---> Button */}
          <Button sx={styles.btn} variant="outlined">
            SIGNUP
            <img src={contact1} width={20} height={20} />
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Header1;
