import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
function EditBeerForm(props) {
  const { beer } = props;

  function handleEditBeerFormSubmission(event) {
    event.preventDefault();
    props.onEditBeer({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      abv: event.target.abv.value,
      id: beer.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditBeerFormSubmission}
        buttonText="Update Beer"
      />
    </React.Fragment>
  );
}