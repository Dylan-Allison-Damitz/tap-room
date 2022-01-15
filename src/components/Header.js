import React from "react";
import beerImage from "./../img/beer.jpeg";
function Header() {
  return (
    <React.Fragment>
      <h1>Uncle Dyl's Speakeasy</h1>
      {/* eslint-disable-next-line */}
      <img src={beerImage}/>
    </React.Fragment>
  );
}

export default Header;