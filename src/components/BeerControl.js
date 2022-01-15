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

  handleIncrementQuantity = (id) => {
    if (this.state.mainBeerList.length > 1) {
      const selectedBeer = this.state.mainBeerList.filter(
        (beer) => beer.id === id
      )[0];
      if(selectedBeer.quantity > 0){
      selectedBeer.quantity--;
      const newMainBeerList = this.state.mainBeerList
        .filter((beer) => beer.id !== id)
        .concat(selectedBeer);
      this.setState({
        mainBeerList: newMainBeerList,
      })};
    } else {
      const selectedBeer = this.state.mainBeerList.filter(
        (beer) => beer.id === id
      )[0];
      if(selectedBeer.quantity > 0){
      selectedBeer.quantity--;
      const newBeerListArray = [];
      const changedBeerArray = newBeerListArray.concat(selectedBeer);
      this.setState({
        mainBeerList: changedBeerArray,
      })};
    }
  };

  handleQuantityRestock = (id) => {
    if (this.state.mainBeerList.length > 1) {
      const selectedBeer = this.state.mainBeerList.filter(
        (beer) => beer.id === id
      )[0];
      selectedBeer.quantity += Number(20);
      const newMainBeerList = this.state.mainBeerList
        .filter((beer) => beer.id !== id)
        .concat(selectedBeer);
      this.setState({
        mainBeerList: newMainBeerList,
      });
    } else {
      const selectedBeer = this.state.mainBeerList.filter(
        (beer) => beer.id === id
      )[0];
      selectedBeer.quantity += Number(20);
      const newBeerListArray = [];
      const changedBeerArray = newBeerListArray.concat(selectedBeer);
      this.setState({
        mainBeerList: changedBeerArray,
      });
    }
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.state.mainBeerList.filter(
      (beer) => beer.id === id
    )[0];
    this.setState({ selectedBeer: selectedBeer });
  };

  handleDeletingBeer = (id) => {
    const newMainBeerList = this.state.mainBeerList.filter(
      (beer) => beer.id !== id
    );
    this.setState({
      mainBeerList: newMainBeerList,
      selectedBeer: null,
    });
  };

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleEditingBeerInList = (beerToEdit) => {
    const editedMainBeerList = this.state.mainBeerList
      .filter((beer) => beer.id !== this.state.selectedBeer.id)
      .concat(beerToEdit);
    this.setState({
      mainBeerList: editedMainBeerList,
      editing: false,
      selectedMerch: null,
    });
  };
}

export default BeerControl;