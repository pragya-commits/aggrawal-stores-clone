import React from "react";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  const styles = {
    footermain: {
      display: "flex",
      justifyConetent: "space-between",
      paddingBottom: "60px",
    },

    mainfooterbox: {
      padding: "20px",
      paddingLeft: "200px",
      paddingRight: "5%",
      backgroundColor: "#3cb0ff",
    },
    footerelement: {
      color: "#fff",
      paddingRight: "80px",
      paddingLeft: "15px",
      padding: "77px ,0 ,0 ,276px",
      paddingTop: "40px",
    },
    footcontent: {
      fontSize: "19px",
      fontWeight: "500",
      lineHeight: "1.68",
      paddingBottom: "2%",
    },
    foothead: {
      fontSize: "19px",
      fontWeight: "700",
      lineHeight: ".84",
    },
  };

  return (
    <Box sx={styles.mainfooterbox}>
      <Box sx={styles.footermain}>
        <Box sx={styles.footerelement}>
          <Typography sx={styles.foothead}>
            Working<br></br> Hours
          </Typography>
          <br></br>
          <Typography sx={styles.footcontent}>
            10 AM - 7 PM<br></br>
            <br></br>
          </Typography>
        </Box>

        <Box sx={styles.footerelement}>
          <Typography sx={styles.foothead}>Contact Us</Typography>
          <Typography sx={styles.footcontent}>+44 345 678 903</Typography>
          <Typography sx={styles.footcontent}>adobexd@mail.com</Typography>
          <Typography sx={styles.footcontent}>Find a Store</Typography>
        </Box>

        <Box sx={styles.footerelement}>
          <Typography sx={styles.foothead}>Customer Service</Typography>
          <Typography sx={styles.footcontent}>Ordering & Payment</Typography>
          <Typography sx={styles.footcontent}>Shipping</Typography>
          <Typography sx={styles.footcontent}> Returns</Typography>
          <Typography sx={styles.footcontent}>FAQ</Typography>
        </Box>

        <Box sx={styles.footerelement}>
          <Typography sx={styles.foothead}>Our Branches</Typography>
          <Typography sx={styles.footcontent}>Vikaspuri</Typography>
          <Typography sx={styles.footcontent}>Tilak Nagar</Typography>
          <Typography sx={styles.footcontent}>Rajouri Garden</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
