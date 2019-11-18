import React from "react";
// import { tsPropertySignature } from '@babel/types';

export default props => {
  return (
    <button type="button" onClick={() => props.onAdd(props.data)}>
      Add Note
    </button>
  );
};
