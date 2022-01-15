import React from "react";
import Beer from "./Beer";
import PropTypes from "prop-types";

function BeerList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.beerList.map((beer) => (
        <Beer
          whenBeerClicked={props.onBeerSelection} 
          name={beer.name}
          description={beer.description}
          quantity={beer.quantity}
          abv={beer.abv}
          id={beer.id}
          key={beer.id}
        />
      ))}
    </React.Fragment>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onBeerSelection: PropTypes.func,
};
export default BeerList;