import React from "react";
import { Box, Typography } from "@mui/material";
import people from "./people.png";
const Aboutus = () => {
  const styles = {
    mainaboutdiv: {
      backgroundColor: "#FFFF00",
      display: "flex",
      justifyContent: "space-between",
    },
    rightsimage: {
      paddingLeft: "600px",
      paddingBottom: "900",
    },
    about: {
      fontSize: "5.2vw",
      fontWeight: "700",
      textAlign: "left",
      paddingLeft: "150px",
      paddingTop: "20px",
    },
    paragraph: {
      fontSize: "1.467vw",
      textAlign: "left",
      fontWeight: "550",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.55",
      letterSpacing: "normal",
      paddingLeft: "150px",
    },
  };
  return (
    <Box sx={styles.mainaboutdiv}>
      {/* content of herosection starts */}
      <Box sx={styles.aboutsection}>
        {/* left side content */}
        <Typography sx={styles.about}>About Us</Typography>
        <Typography sx={styles.paragraph}>
          Excesmallteur sint occaecat cupidatat non proident, sunt<br></br>
          in culpa qui officia deserunt Excepteur sint occaecat<br></br>
          cupidatat non proident, sunt in culpa qui officia<br></br>
          deserunt Excepteur sint occaecat cupidatat non<br></br>
          proident, sunt in culpa qui officia deserunt Excepteur<br></br>
          sint occaecat cupidatat non proident, sunt in culpa qui<br></br>
          officia deserunt
        </Typography>
      </Box>
      {/* right side content */}
      <Box sx={styles.peopleimage}>
        <img src={people} width={526.39} height={348.79} />
      </Box>
    </Box>
  );
};
export default Aboutus;
