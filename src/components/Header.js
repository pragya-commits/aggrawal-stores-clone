import React from "react";
const Header = () => {
  return (
    // starting main div of Header//
    <div className="mainheaddiv">
      <div className="logo">
        <img
          src={require("./aggrawal stores logo.png")}
          width={90}
          height={50}
        />
      </div>
      <div className="navbar">
        <p className="navitem">CONTACT US</p>
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
