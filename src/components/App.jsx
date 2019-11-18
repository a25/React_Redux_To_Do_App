import React from "react";
import AddButtonContainer from "../containers/AddButtonContainer.js";
import CardsContainer from "../containers/CardsContainer.js";
import InputContainer from "../containers/InputContainer.js";
// import Card from "./Card.jsx";
export default props => {
  return (
    <div>
      <InputContainer />
      <AddButtonContainer />
      <CardsContainer />
    </div>
  );
};
