import React from "react";

export default props => {
  return (
    <input
      type="text"
      name="notes"
      value={props.userInput}
      onChange={props.onChange}
    />
  );
};
