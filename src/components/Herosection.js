import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Herosectionimg from "./herosection image.png";
import { hover } from "@testing-library/user-event/dist/hover";
const Herosection = () => {
  const styles = {
    herosection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: "30px",
      paddingTop: "50px",
      paddingRight: "0px",
      paddingLeft: "146",
      paddingBottom: "80px",
    },

    mainherodiv: {
      backgroundColor: "#007bff",
      paddingTop: "90px",
      paddingRight: "0px",
      paddingLeft: "146",
      paddingBottom: "40px",
      display: "flex",
      justifyContent: "space-between",
    },
    heroright: {
      maxWidth: "100%",
      height: "auto",
      floatRight: "!important",
      padding: "80px",
    },
    order: {
      fontSize: "8.6vw",
      fontWeight: "700",
      lineHeight: ".89",
      textAlign: "left",
      color: "white",
      marginLeft: "130px",
      paddingTop: "100px",
    },
    btn: {
      backgroundColor: "white",
      color: "rgb(30,144,255)",
      borderRadius: "25px",
      paddingRight: "20px",
      paddingLeft: "20px",
      fontSize: "30px",
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
  };
  return (
    // hero main section starts
    <Box sx={styles.mainherodiv}>
      {/* content of herosection starts */}
      <box sx={styles.herosection}>
        {/* left side content */}
        <Typography sx={styles.order}>
          ORDER <br></br>ONLINE
        </Typography>
        <Button sx={styles.btn} variant="outlined">
          Shop Now
        </Button>
      </box>
      {/* right side content */}
      <box sx={styles.heroright}>
        <img src={Herosectionimg} width={736.94} height={"545.72"} />
      </box>
    </Box>
  );
};
export default Herosection;
