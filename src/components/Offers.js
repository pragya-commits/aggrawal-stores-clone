import react from "react";
import { Box } from "@mui/material";
import offerspray from "./offerspray.png";
import offerpink from "./offerpink.png";
import offermakeup from "./offermakeup.png";
import offermilk from "./offermilk.png";
const Offers = () => {
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
  };
  return (
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
  );
};
export default Offers;
