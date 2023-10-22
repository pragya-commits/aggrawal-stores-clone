import { Box, Typography } from "@mui/material";
import React from "react";
import Deliveryimage from "./delivery.png";
const Delivery = () => {
  const styles = {
    maindeliverydiv: {
      marginTop: "150px",
      alignItem: "center",
      marginLeft: "35px",
    },
    text: {
      fontSize: "4.933vw",
      fontWeight: "700",
      lineHeight: ".95",
      textAlign: "center",
      marginTop: "2%",
      paddingBottom: "5%",
      color: "rgb(24, 119, 250)",
    },
  };

  return (
    <Box sx={styles.maindeliverydiv}>
      <img src={Deliveryimage} width={1110} height={559.41} />
      <Box sx={styles.deliverytext}>
        <Typography sx={styles.text}>
          We are delivering in 5 km Radius of all <br></br>our stores
        </Typography>
      </Box>
    </Box>
  );
};
export default Delivery;
