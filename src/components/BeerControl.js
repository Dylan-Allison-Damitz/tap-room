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

  handleClick = () => {
    if (this.state.selectedBeer != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeer: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewBeerToList = (newBeer) => {
    const newMainBeerList = this.state.mainBeerList.concat(newBeer);
    this.setState({
      mainBeerList: newMainBeerList,
      formVisibleOnPage: false,
    });
  };