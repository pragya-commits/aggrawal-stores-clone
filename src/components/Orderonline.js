// import React from "react";
// import online from "./orderimage.png";
// import { Box, Button, Typography } from "@mui/material";
// const Orderonline = () => {
//   const styles = {
//     mainorderdiv: {
//       paddingTop: "20px",
//       paddingLeft: "20px",
//       paddingRight: "20px",
//       display: "flex",
//       justifyContent: "space-between",
//       marginRight: "auto",
//       marginLeft: "auto",
//       backgroundColor: "#3d99fc",
//       color: "white",
//       alignItem: "center",
//       paddingBottom: "20px",
//     },
//     online: {
//       paddingTop: "100px",
//       fontSize: "7.357vw",
//       fontWeight: "700",
//       paddingLeft: "100px",
//       lineHeight: ".89",
//       // marginBottom: "0.5rem",
//     },
//     rightimage: {
//       paddingTop: "65px",
//       paddingBottom: "0",
//     },
//     btn: {
//       backgroundColor: "white",
//       color: "rgb(30,144,255)",
//       borderRadius: "25px",
//       paddingRight: "30px",
//       paddingLeft: "30px",
//       paddingTop: "10px",
//       paddingBottom: "10px",
//       fontSize: "25px",
//       borderStyle: "inset",
//       border: "1px,solid,black",
//       fontWeight: "bolder",
//       marginLeft: "130px",
//       marginTop: "40px",
//       borderWidth: "3px",
//       ":hover": {
//         backgroundColor: "#37a9ff",
//         color: "white",
//       },
//     },
//     ordersection: {
//       paddingTop: "5px",
//     },
//   };
//   return (
//     <Box sx={styles.mainorderdiv}>
//       {/* content of herosection starts */}
//       <Box sx={styles.ordersection}>
//         {/* left side content */}
//         <Typography sx={styles.online}>
//           Fight With<br></br>
//           Covid-19<br></br>
//           Order Online.
//         </Typography>
//         <Button sx={styles.btn} variant="outlined">
//           Shop Now
//         </Button>
//       </Box>
//       {/* right side content */}
//       <Box sx={styles.rightimage}>
//         <img src={online} width={526.39} height={498.29} />
//       </Box>
//     </Box>
//   );
// };
// export default Orderonline;

import React from "react";
import online from "./orderimage.png";

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
      fontSize: "7.6vw",
      fontWeight: "700",
      lineHeight: 0.89,
      color: "white",
      marginLeft: "130px",
      paddingTop: "100px",
      textAlign: "left",
      ...tabletDesign({
        // textAlign: "center",
        fontSize: "50px",
        marginLeft: "0",
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
      width: "40%",
      ...tabletDesign({
        marginTop: "20px",
        width: "100%",
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
        <Typography sx={styles.order}>
          Fight With<br></br>
          Covid-19<br></br>
          Order Online.
        </Typography>
        <Button sx={styles.btn} variant="outlined">
          Shop Now
        </Button>
      </Box>
      <Box sx={styles.heroright}>
        <img src={online} alt="Hero Section" style={styles.img} />
      </Box>
    </Box>
  );
};

export default Herosection;
