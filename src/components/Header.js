import React from "react";
import Logo1 from "./aggrawal stores logo.png";
import { Typography } from "@mui/material";

const Header = () => {
  const styles = {
    navItem: {
      justifyContent: "space-between",
    },
  };

  // OBJECT - KEY , VALUE PAIR

  //  const name = "Yogita";
  //  const age = 45;
  //  const occupation = "Developer";

  //  obj = {
  //   name : "Yogita", // name --> key , "yogita" ---> value
  //   age:45,
  //   occupation:"Developer"
  //  }
  //  obj.name  // YOGITA

  return (
    // starting main div of Header//
    <div className="mainheaddiv">
      <div className="logo">
        <img src={Logo1} width={90} height={50} />
      </div>
      <div className="navbar">
        <Typography sx={styles.navItem}>CONTACT US</Typography>

        {/* 
        
        ALL TEXT TAGS (h1-h6,p,span) --> Typography
        className --> sx
        

        */}

        {/* <p className="navitem">CONTACT US</p> */}
        <p className="navitem">FIND NEAREST STORE</p>
        <p className="navitem">ORDER ONLINE</p>
        <button className="headbtn">
          <h1>SIGN UP</h1>{" "}
          <img
            className="contact"
            src={require("./contact image.png")}
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};
export default Header;
