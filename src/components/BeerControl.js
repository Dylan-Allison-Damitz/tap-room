import React from "react";
import NewBeerForm from "./NewBeerForm";
import BeerList from "./BeerList";
import BeerDetail from "./BeerDetail";
import EditBeerForm from "./EditBeerForm";

class BeerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBeerList: [],
      selectedBeer: null,
      editing: false,
    };
  }
}