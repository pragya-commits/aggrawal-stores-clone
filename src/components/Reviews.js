import React from "react";
import { Box, Typography } from "@mui/material";
import contact from "./contact.png";
import star1 from "./star1.png";
import CustomSlider from "./CustomSlider";
const Reviews = () => {
  const styles = {
    mainBox: {
      backgroundColor: "#fff72b",
      padding: "40px",
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
    },
    luketext: {
      fontSize: "1.8vw",
      fontWeight: "700",
      lineHeight: "1.19",
    },
    parap: {
      fontSize: ".933vw",
      lineHeight: "1.29",
      fontWeight: "500",
      fontColor: "rgb(128,128,128)",
    },
    text: {
      fontFamily: "Heebo",
      fontSize: "40px",
      padding: "43px ,0, 50px, 141px",
      // marginLeft: "350px",
      marginBottom: "20px",
    },
  };

  const reviewData = [
    {
      customerName: "Yogita",
      customerReview:
        "The best salon in the city. I have been visiting this salon for the past 2 years and I am very happy with the services. The staff is very friendly and professional. I would highly recommend this salon to everyone.",
    },
    {
      customerName: "Kamal",
      customerReview:
        "The best salon in the city. I have been visiting this salon for the past 2 years and I am very happy with the services. The staff is very friendly and professional. I would highly recommend this salon to everyone.",
    },
    {
      customerName: "Pendharkar",
      customerReview:
        "The best salon in the city. I have been visiting this salon for the past 2 years and I am very happy with the services. The staff is very friendly and professional. I would highly recommend this salon to everyone.",
    },
  ];
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
              <img src={contact} width={145} height={145} />
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
