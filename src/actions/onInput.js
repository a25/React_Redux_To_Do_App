import { INPUT } from "../constants.js";
function addNotes(data) {
  return {
    type: INPUT,
    data
  };
}
export default addNotes;
