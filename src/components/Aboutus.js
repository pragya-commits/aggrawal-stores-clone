import React from "react";
import { Box, Typography } from "@mui/material";
import people from "./people.png";
import { useResponsiveStyles } from "../utils/useResponsiveStyles";

const Aboutus = () => {
  const { tabletDesign } = useResponsiveStyles();
  const styles = {
    mainaboutdiv: {
      backgroundColor: "#FFD700",
      display: "flex",
      justifyContent: "space-between",
      padding: "30px",
    },
    aboutSection: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      paddingLeft: "150px",
      ...tabletDesign({
        paddingLeft: "0",
      }),
    },
    about: {
      fontSize: "46px", // Adjust as needed
      fontWeight: "700",
      textAlign: "left",
      paddingTop: "20px",
      paddingBottom: "30px",
      ...tabletDesign({
        fontSize: "30px",
      }),
    },
    paragraph: {
      fontSize: "30px", // Adjust as needed
      textAlign: "left",
      fontWeight: "550",
      lineHeight: "1.55",
      width: "100%",
      ...tabletDesign({
        fontSize: "18px",
      }),
    },
    peopleImage: {
      paddingLeft: "30px",
      display: "flex",
      alignItems: "center",
      ...tabletDesign({
        display: "none",
      }),
    },
    image: {
      maxWidth: "100%",
      height: "auto",
    },
  };

  return (
    <Box sx={styles.mainaboutdiv}>
      <Box sx={styles.aboutSection}>
        <Typography variant="h4" sx={styles.about}>
          About Us
        </Typography>
        <Typography sx={styles.paragraph}>
          At Aggarwal Stores, we have been serving our community with dedication
          and passion for over 15 years. We take pride in being your trusted
          neighborhood store, providing you with a wide range of high-quality
          products and exceptional service.
        </Typography>
      </Box>
      <Box sx={styles.peopleImage}>
        <img src={people} alt="People" style={styles.image} />
      </Box>
    </Box>
  );
};

export default Aboutus;
