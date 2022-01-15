import React from "react";
import beerImage from "./../img/beer.jpeg";
function Header() {
  return (
    <React.Fragment>
      <h1>Hyrule Castle Town Shop</h1>
      {/* eslint-disable-next-line */}
      <img src={beerImage}/>
    </React.Fragment>
  );
}

export default Header;