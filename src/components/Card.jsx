import React from "react";

export default props => {
  return (
    <div className="card bt-10">
      <div className="data" id={props.index}>
        {props.notesData}
      </div>
      <span className="remove" onClick={() => props.onDelete(props.index)}>
        &times;
      </span>
    </div>
  );
};
