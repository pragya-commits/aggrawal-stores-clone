import React from "react";
import { Box } from "@mui/material";
import outlet from "./outllet.png";
const Location = () => {
  const styles = {
    locate: {
      marginTop: "60px",
      marginRight: "50px",
      marginLeft: "50px",
    },
  };
  return (
    <Box sx={styles.locate}>
      <img src={outlet} width={1110} height={471.9} />
    </Box>
  );
};
export default Location;
