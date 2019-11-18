import React from "react";
import Card from "./Card.jsx";
export default props => {
  return (
    <div>
      {props.notesData.map((data, index) => {
        return (
          <Card
            notesData={data.data}
            onDelete={props.onDelete}
            index={data.index}
          />
        );
      })}
    </div>
  );
};
