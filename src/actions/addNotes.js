import { ADD_NOTES } from "../constants.js";
function addNotes(data) {
  return {
    type: ADD_NOTES,
    data
  };
}
export default addNotes;
