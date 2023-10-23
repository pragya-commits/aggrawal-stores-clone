import React from "react";
import { Box, Button, Typography } from "@mui/material";
import safe from "./safe.png";
import quick from "./quick.png";
import products from "./products.png";
const Aggrawalstores = () => {
  const styles = {
    maincontentdiv: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "180px",
      paddingLeft: "60px",
    },
    mainstore: {
      position: "relative",
      width: "100%",
      minHeight: "1px",
      paddingright: "15px",
      paddingLeft: "15px",
      backgroundColor: "#ffe308",
      paddingRight: "90px",
      paddingLeft: "80px",
      paddingTop: "70px",
      paddingBottom: "70px",
    },
    lefttext: {
      fontSize: "5.571vw",
      fontWeight: "700",
      lineHeight: ".91",
      textAlign: "left",
    },
    text: {
      fontSize: "22px",
      fontWeight: "750",
      lineHeight: "1.5",
      color: "#212529",
      textAlign: "center",
    },
  };

  return (
    // main div of Aggrawal stores//
    <Box sx={styles.mainstore}>
      {/* main content div starts from here */}
      <Box sx={styles.maincontentdiv}>
        {/* left side content */}
        <Typography sx={styles.lefttext}>
          Why<br></br>Aggrawal<br></br>Stores?
        </Typography>
        <Box>
          <img src={safe} width={155.39} height={157.87} />
          <Box>
            <Typography sx={styles.text}>
              SAFE & QUICK <br></br>SERVICE
            </Typography>
          </Box>
        </Box>

        <Box>
          <img src={quick} width={155.39} height={157.87} />
          <Box>
            <Typography sx={styles.text}>
              DELIVERY AND <br></br>PICKUP
            </Typography>
          </Box>
        </Box>

        <Box>
          <img src={products} width={155.39} height={157.87} />
          <Box>
            <Typography sx={styles.text}>
              TONS OF <br></br>PRODUCTS
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Aggrawalstores;
