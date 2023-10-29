import React from "react";
import { Box, Typography } from "@mui/material";
import contact from "./contact.png";
import star1 from "./star1.png";
import CustomSlider from "./CustomSlider";
import { useResponsiveStyles } from "../utils/useResponsiveStyles";
const Reviews = () => {
  const isMobile = window.innerWidth <= 600;
  const { tabletDesign } = useResponsiveStyles();
  const styles = {
    mainBox: {
      backgroundColor: "#fff72b",
      padding: "40px",
      ...tabletDesign({
        padding: "20px",
      }),
    },
    contentbox: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "white",
      paddingRight: "10px",
      paddingLeft: "10px",
      paddingTop: "30px",
      paddingBottom: "30px",
      borderRadius: "30px",
      boxShadow: "0 0 20px 0 rgba(255,216,0,.65)",
      width: "30%",
      ...tabletDesign({
        width: "100%",
        marginBottom: "20px",
      }),
    },
    luketext: {
      fontSize: "1.8vw",
      fontWeight: "700",
      lineHeight: "1.19",
      ...tabletDesign({
        fontSize: "20px",
      }),
    },
    parap: {
      fontSize: ".933vw",
      lineHeight: "1.29",
      fontWeight: "500",
      fontColor: "rgb(128,128,128)",
      ...tabletDesign({
        fontSize: "14px",
      }),
    },
    text: {
      fontFamily: "Heebo",
      fontSize: "40px",
      padding: "43px ,0, 50px, 141px",
      // marginLeft: "350px",
      marginBottom: "20px",
      fontWeight: "700",
      ...tabletDesign({
        fontSize: "30px",
        padding: "20px 0px 20px 30px",
      }),
    },
    image: {
      width: "100px",
      height: "100px",
      ...tabletDesign({
        width: "50px",
        height: "50px",
      }),
    },
  };

  let reviewData = [
    {
      customerName: "Alice",
      customerReview:
        "I had a great experience at this store. The staff is wonderful and very professional. I highly recommend it.",
    },
    {
      customerName: "Bob",
      customerReview:
        "I'm extremely satisfied with the services at this store. The quality of service is outstanding!",
    },
    {
      customerName: "Ella",
      customerReview:
        "The staff is very friendly and professional. I would definitely recommend this store to my friends and family.",
    },
  ];

  if (isMobile) {
    reviewData = reviewData.slice(0, 1);
  }

  //

  return (
    <Box sx={styles.mainBox}>
      <Typography sx={styles.text}>Customer Reviews</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* ALWAYS USE MAP LOOP */}

        {reviewData.map((item, index) => {
          return (
            <Box sx={styles.contentbox}>
              <img src={contact} style={styles?.image} />
              <Box sx={styles.content}>
                <Typography sx={styles.luketext}>
                  {item.customerName}
                </Typography>
                <img src={star1} width={17} height={17} />
                <img src={star1} width={17} height={17} />
                <img src={star1} width={17} height={17} />
                <img src={star1} width={17} height={17} />
                <img src={star1} width={17} height={17} />
                <Typography sx={styles.parap}>{item.customerReview}</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default Reviews;
