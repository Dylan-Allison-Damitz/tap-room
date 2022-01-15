import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewBeerForm(props) {
  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      abv: parseInt(event.target.abv.value),
      id: v4(),
    });
  }