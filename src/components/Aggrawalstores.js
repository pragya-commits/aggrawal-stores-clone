import React from "react";
import { Box, Typography } from "@mui/material";
import safe from "./safe.png";
import quick from "./quick.png";
import products from "./products.png";
import { useResponsiveStyles } from "../utils/useResponsiveStyles";

const Feature = ({ imageSrc, text }) => {
  const { tabletDesign } = useResponsiveStyles();
  const styles = {
    featureBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      ...tabletDesign({
        marginTop: "20px",
      }),
    },
    image: {
      width: 155.39,
      height: 157.87,
    },
    text: {
      fontSize: "22px",
      fontWeight: "750",
      lineHeight: "1.5",
      color: "#212529",
      textAlign: "center",
      ...tabletDesign({
        fontSize: "18px",
      }),
    },
  };

  return (
    <Box sx={styles.featureBox}>
      <img src={imageSrc} alt="Feature" style={styles.image} />
      <Box>
        <Typography sx={styles.text}>{text}</Typography>
      </Box>
    </Box>
  );
};

const Aggrawalstores = () => {
  const { tabletDesign } = useResponsiveStyles();

  const styles = {
    mainstore: {
      width: "100%",
      backgroundColor: "#ffe308",
      padding: "70px 80px",
      ...tabletDesign({
        padding: "30px 0px",
      }),
    },
    maincontentdiv: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "180px",
      paddingLeft: "60px",
      alignItems: "center",
      ...tabletDesign({
        flexDirection: "column",
        // alignItems: "flex-start",
        justifyContent: "center",
        paddingRight: "0px",
        paddingLeft: "0px",
      }),
    },
    lefttext: {
      fontSize: "5.571vw",
      fontWeight: "700",
      lineHeight: ".91",
      textAlign: "left",
      ...tabletDesign({
        fontSize: "40px",
        textAlign: "center",
      }),
    },
  };

  return (
    <Box sx={styles.mainstore}>
      <Box sx={styles.maincontentdiv}>
        <Typography sx={styles.lefttext}>
          Why
          <br />
          Aggrawal
          <br />
          Stores?
        </Typography>
        <Feature imageSrc={safe} text="SAFE & QUICK SERVICE" />
        <Feature imageSrc={quick} text="DELIVERY AND PICKUP" />
        <Feature imageSrc={products} text="TONS OF PRODUCTS" />
      </Box>
    </Box>
  );
};

export default Aggrawalstores;
