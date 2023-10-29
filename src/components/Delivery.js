import React from "react";
import { Box, Typography } from "@mui/material";
import Deliveryimage from "./delivery.png";

const Delivery = () => {
  const styles = {
    maindeliverydiv: {
      alignItems: "center", // Fixed the typo here (alignItem -> alignItems)

      textAlign: "center",
      padding: "50px 30px 30px 30px",
    },
    text: {
      fontSize: "4.933vw",
      fontWeight: "700",
      lineHeight: "0.95",
      marginTop: "2%",
      color: "rgb(24, 119, 250)",
    },
    deliveryImage: {
      width: "100%",
      maxWidth: "1110px",
      height: "auto",
    },
  };

  return (
    <Box sx={styles.maindeliverydiv}>
      <img src={Deliveryimage} alt="Delivery" style={styles.deliveryImage} />
      <Box sx={styles.deliverytext}>
        <Typography sx={styles.text}>
          We are delivering in a 5 km radius of all our stores
        </Typography>
      </Box>
    </Box>
  );
};

export default Delivery;
