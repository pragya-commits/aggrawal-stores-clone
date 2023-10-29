import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useResponsiveStyles } from "../utils/useResponsiveStyles";

const Footer = () => {
  const { tabletDesign, mobileDesign } = useResponsiveStyles();

  const styles = {
    mainfooterbox: {
      backgroundColor: "#3cb0ff",
      padding: "50px",
      // paddingLeft: "20px",
      ...tabletDesign({
        paddingLeft: "40px",
      }),
    },
    footermain: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      paddingBottom: "20px",
      ...tabletDesign({
        flexDirection: "row",
      }),
      ...mobileDesign({
        paddingBottom: "20px",
      }),
    },
    footerelement: {
      color: "#fff",
      paddingTop: "20px",
      paddingRight: "20px",
      ...tabletDesign({
        paddingRight: "40px",
      }),
    },
    foothead: {
      fontSize: "19px",
      fontWeight: "700",
      lineHeight: "0.84",
    },
    footcontent: {
      fontSize: "19px",
      fontWeight: "500",
      lineHeight: "1.68",
      paddingBottom: "10px",
    },
  };

  const sections = [
    {
      heading: "Working Hours",
      content: ["10 AM - 7 PM"],
    },
    {
      heading: "Contact Us",
      content: ["+44 345 678 903", "adobexd@mail.com", "Find a Store"],
    },
    {
      heading: "Customer Service",
      content: ["Ordering & Payment", "Shipping", "Returns", "FAQ"],
    },
    {
      heading: "Our Branches",
      content: ["Vikaspuri", "Tilak Nagar", "Rajouri Garden"],
    },
  ];

  return (
    <Box sx={styles.mainfooterbox}>
      <Grid container spacing={3}>
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={styles.footerelement}>
              <Typography sx={styles.foothead}>{section.heading}</Typography>
              <br />
              {section.content.map((item, itemIndex) => (
                <Typography key={itemIndex} sx={styles.footcontent}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Footer;
