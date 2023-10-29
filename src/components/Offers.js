import react from "react";
import { Box, Typography } from "@mui/material";
import offerspray from "./offerspray.png";
import offerpink from "./offerpink.png";
import offermakeup from "./offermakeup.png";
import offermilk from "./offermilk.png";
import { useResponsiveStyles } from "../utils/useResponsiveStyles";
const Offers = () => {
  const { tabletDesign } = useResponsiveStyles();
  const styles = {
    offersimg: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: "40px",
      marginBottom: "40px",
    },
    firstBox: {
      marginRight: "15px",
      minHeight: "100%",
    },
    makemilk: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    text: {
      fontSize: "70px",
      fontWeight: "700",
      paddingLeft: "100px",
    },
    root: {
      ...tabletDesign({
        display: "none",
      }),
    },
  };
  return (
    <Box sx={styles?.root}>
      <Typography sx={styles?.text}>Offers</Typography>
      <Box sx={styles.offersimg}>
        <Box sx={styles.firstBox}>
          <img src={offerspray} width={460} />
        </Box>

        <Box>
          <img src={offerpink} width={635} height={263.74} />
          <Box sx={styles.makemilk}>
            <img src={offermakeup} width={302.5} height={232.42} />
            <img src={offermilk} width={302.5} height={230.95} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Offers;
