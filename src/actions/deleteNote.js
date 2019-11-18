import { DELETE_NOTES } from "../constants.js";
function deleteNotes(id) {
  console.log("id is...", id);
  return {
    type: DELETE_NOTES,
    id
  };
}
export default deleteNotes;
