// import React from "react";
// import { Box, Grid, Typography } from "@mui/material";
// import { useResponsiveStyles } from "../utils/useResponsiveStyles";
// import Producimg from "./grocery.png";
// import Producimg1 from "./personal-care.png";
// import Producimg2 from "./dairy.png";
// import Producimg3 from "./snacks.png";
// import Producimg4 from "./bakery.png";
// import Producimg5 from "./household.png";
// const productImages = [
//   { src: Producimg, label: "GROCERY" },
//   { src: Producimg1, label: "PERSONAL CARE" },
//   { src: Producimg2, label: "DAIRY" },
//   { src: Producimg3, label: "SNACK" },
//   { src: Producimg4, label: "BAKERY" },
//   { src: Producimg5, label: "HOUSEHOLD" },
// ];

// const Products = () => {
//   const { tabletDesign, mobileDesign } = useResponsiveStyles();

//   const styles = {
//     heading: {
//       fontSize: "50px",
//       fontWeight: "bolder",
//       // lineHeight: "2.57",
//       ...tabletDesign({
//         fontSize: "30px",
//         marginLeft: "15px",
//         marginTop: "20px",
//       }),
//       ...mobileDesign({
//         // fontSize: "25px",
//       }),
//     },
//     images: {
//       // display: "flex",
//       // justifyContent: "space-between",
//       // textAlign: "center",
//       ...tabletDesign({
//         flexDirection: "column",
//         alignItems: "flex-start",
//         // padding: "20px 0px 20px 30px",
//       }),
//       ...mobileDesign({
//         flexDirection: "column",
//         alignItems: "center",
//       }),
//     },
//     text: {
//       fontSize: "1.286vw",
//       fontWeight: "700",
//       // lineHeight: "0.89",
//       // textAlign: "center",
//       marginTop: "20px",
//       ...tabletDesign({
//         fontSize: "18px",
//         marginTop: "10px",
//       }),
//     },
//     mainproductdiv: {
//       // margin: "50px 125px",
//     },
//   };

//   return (
//     <Grid container sx={styles.mainproductdiv}>
//       <Grid item xs={12}>
//         <Typography sx={styles.heading}>Our Products</Typography>
//       </Grid>
//       <Grid container>
//         {productImages.map((product, index) => (
//           <Grid item key={index} xs={6} md={2}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 flexDirection: "column",
//                 // textAlign: "center",
//                 ...tabletDesign({
//                   marginTop: "20px",
//                 }),
//               }}
//             >
//               <img
//                 src={product.src}
//                 width={138.94}
//                 height={"137.22"}
//                 alt={product.label}
//               />
//               {/* <Box> */}
//               <Typography sx={styles.text}>{product.label}</Typography>
//               {/* </Box> */}
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Grid>
//   );
// };

// export default Products;

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useResponsiveStyles } from "../utils/useResponsiveStyles";
import Producimg from "./grocery.png";
import Producimg1 from "./personal-care.png";
import Producimg2 from "./dairy.png";
import Producimg3 from "./snacks.png";
import Producimg4 from "./bakery.png";
import Producimg5 from "./household.png";
const productImages = [
  { src: Producimg, label: "GROCERY" },
  { src: Producimg1, label: "PERSONAL CARE" },
  { src: Producimg2, label: "DAIRY" },
  { src: Producimg3, label: "SNACK" },
  { src: Producimg4, label: "BAKERY" },
  { src: Producimg5, label: "HOUSEHOLD" },
];

const Products = () => {
  const { tabletDesign, mobileDesign } = useResponsiveStyles();

  const styles = {
    heading: {
      fontSize: "50px",
      fontWeight: "bolder",
      marginLeft: "15px",
      marginTop: "20px",
      marginBottom: "30px",
      ...tabletDesign({
        fontSize: "30px",
        marginBottom: "0px",
      }),
      ...mobileDesign({
        fontSize: "25px",
      }),
    },
    gridItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      ...tabletDesign({
        marginTop: "20px",
      }),
    },
    text: {
      fontSize: "1.286vw",
      fontWeight: "700",
      ...tabletDesign({
        fontSize: "18px",
        marginTop: "10px",
      }),
    },
    mainproductdiv: {
      marginBottom: "100px",

      ...tabletDesign({
        marginBottom: "0px",
      }),
    },
  };

  return (
    <Grid container sx={styles.mainproductdiv}>
      <Grid item xs={12}>
        <Typography sx={styles.heading}>Our Products</Typography>
      </Grid>
      <Grid container>
        {productImages.map((product, index) => (
          <Grid item key={index} xs={6} md={2} sx={styles.gridItem}>
            <img
              src={product.src}
              width={138.94}
              height={"137.22"}
              alt={product.label}
            />
            <Typography sx={styles.text}>{product.label}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Products;
