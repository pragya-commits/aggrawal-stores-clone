import React from "react";
import Producimg from "./grocery.png";
import Producimg1 from "./personal-care.png";
import Producimg2 from "./dairy.png";
import Producimg3 from "./snacks.png";
import Producimg4 from "./bakery.png";
import Producimg5 from "./household.png";
import { Box, Typography } from "@mui/material";

const Products = () => {
  const styles = {
    heading: {
      fontSize: "50px",
      fontWeight: "bolder",
      lineHeight: "2.57",
    },
    images: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center",
    },
    text: {
      fontSize: "1.286vw",
      fontWeight: "700",
      lineHeight: ".89",
      textAlign: "center",
      marginTop: "20%",
    },
    mainproductdiv: {
      marginRight: "125px",
      marginLeft: "125px",
      marginTop: "50px",
      marginBottom: "50px",
    },
  };
  return (
    // starting of maindiv of our product //
    <Box sx={styles.mainproductdiv}>
      <Typography sx={styles.heading}>Our Products</Typography>
      <Box sx={styles.images}>
        {" "}
        {/* starting of our product images */}
        <Box>
          <img src={Producimg} width={138.94} height={"137.22"} />
          <Box>
            <Typography sx={styles.text}>GROCERY</Typography>
          </Box>
        </Box>
        <Box>
          <img src={Producimg1} width={138.94} height={"137.22"} />
          <Box>
            <Typography sx={styles.text}>PERSONAL-CARE</Typography>
          </Box>
        </Box>
        <Box>
          <img src={Producimg2} width={138.94} height={"137.22"} />
          <Box>
            <Typography sx={styles.text}>DAIRY</Typography>
          </Box>
        </Box>
        <Box>
          <img src={Producimg3} width={138.94} height={"137.22"} />
          <Box>
            <Typography sx={styles.text}>SNACK</Typography>
          </Box>
        </Box>
        <Box>
          <img src={Producimg4} width={138.94} height={"137.22"} />
          <Box>
            <Typography sx={styles.text}>BAKERY</Typography>
          </Box>
        </Box>
        <Box>
          <img src={Producimg5} width={138.94} height={"137.22"} />
          <Box>
            <Typography sx={styles.text}>HOUSEHOLD</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Products;
