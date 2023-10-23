import React from "react";
import online from "./orderimage.png";
import { Box, Button, Typography } from "@mui/material";
const Orderonline = () => {
  const styles = {
    mainorderdiv: {
      paddingTop: "5px",
      paddingLeft: "20px",
      paddingRight: "20px",
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "2px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
      backgroundColor: "#3d99fc",
      color: "white",
      alignItem: "center",
    },
    online: {
      paddingTop: "100px",
      fontSize: "7.357vw",
      fontWeight: "700",
      paddingLeft: "100px",
      lineHeight: ".89",
      // marginBottom: "0.5rem",
    },
    rightimage: {
      paddingTop: "65px",
      paddingBottom: "0",
    },
    btn: {
      backgroundColor: "white",
      color: "rgb(30,144,255)",
      borderRadius: "25px",
      paddingRight: "30px",
      paddingLeft: "30px",
      paddingTop: "10px",
      paddingBottom: "10px",
      fontSize: "25px",
      borderStyle: "inset",
      border: "1px,solid,black",
      fontWeight: "bolder",
      marginLeft: "130px",
      marginTop: "40px",
      borderWidth: "3px",
      ":hover": {
        backgroundColor: "#37a9ff",
        color: "white",
      },
    },
    ordersection: {
      paddingTop: "5px",
    },
  };
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
