import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Herosectionimg from "./herosection image.png";
import { useResponsiveStyles } from "../utils/useResponsiveStyles";

const Herosection = () => {
  const { tabletDesign } = useResponsiveStyles();

  const styles = {
    mainherodiv: {
      backgroundColor: "#007bff",
      // padding: "90px 0 40px 146px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      ...tabletDesign({
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "20px 0px 20px 30px",
      }),
    },
    order: {
      fontSize: "8.6vw",
      fontWeight: "700",
      lineHeight: 0.89,
      color: "white",
      marginLeft: "130px",
      paddingTop: "100px",
      textAlign: "left",
      ...tabletDesign({
        // textAlign: "center",
        marginLeft: "0",
        fontSize: "50px",

        paddingTop: "0",
      }),
    },
    btn: {
      backgroundColor: "white",
      color: "rgb(30, 144, 255)",
      borderRadius: "25px",
      padding: "20px",
      fontSize: "30px",
      borderStyle: "inset",
      fontWeight: "bolder",
      marginLeft: "130px",
      marginTop: "40px",
      ":hover": {
        backgroundColor: "#37a9ff",
        color: "white",
      },
      ...tabletDesign({
        marginLeft: "0",
        marginTop: "10px",
        padding: "0px 10px",
        fontSize: "18px",
      }),
    },
    heroright: {
      maxWidth: "100%",
      height: "auto",
      ...tabletDesign({
        marginTop: "20px",
      }),
    },
    img: {
      width: "100%",
      height: "auto",
    },
  };

  return (
    <Box sx={styles.mainherodiv}>
      <Box>
        <Typography sx={styles.order}>ORDER ONLINE</Typography>
        <Button sx={styles.btn} variant="outlined">
          Shop Now
        </Button>
      </Box>
      <Box sx={styles.heroright}>
        <img src={Herosectionimg} alt="Hero Section" style={styles.img} />
      </Box>
    </Box>
  );
};

export default Herosection;
