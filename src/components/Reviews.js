import React from "react";
import { Box, Typography } from "@mui/material";
import contact from "./contact.png";
import star1 from "./star1.png";
const Reviews = () => {
  const styles = {
    mainBox: {
      backgroundColor: "#fff72b",
    },
    contentbox: {
      marginRight: "350px",
      marginLeft: "350px",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "white",
      paddingRight: "10px",
      paddingLeft: "10px",
      paddingTop: "30px",
      paddingBottom: "30px",
      borderRadius: "30px",
      boxShadow: "0 0 20px 0 rgba(255,216,0,.65)",
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
      marginLeft: "350px",
    },
  };

  return (
    <Box sx={styles.mainBox}>
      <Typography sx={styles.text}>Customer Reviews</Typography>
      <Box sx={styles.contentbox}>
        <img src={contact} width={145} height={145} />
        <Box sx={styles.content}>
          <Typography sx={styles.luketext}>Luke Pachytel</Typography>
          <img src={star1} width={17} height={17} />
          <img src={star1} width={17} height={17} />
          <img src={star1} width={17} height={17} />
          <img src={star1} width={17} height={17} />
          <img src={star1} width={17} height={17} />
          <Typography sx={styles.parap}>
            lorem ipsum is a simple dummy text of the<br></br> printing and
            typesetting setting industry lorem<br></br>
            ipsum has been the
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Reviews;
