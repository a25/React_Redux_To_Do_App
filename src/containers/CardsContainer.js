import { connect } from "react-redux";
import Cards from "../components/Cards.jsx";
import deleteNote from "../actions/deleteNote.js";
// connect()
let mapActionToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteNote(id));
    }
  };
};

let mapStateToProps = state => {
  return { notesData: state.notesData, index: state.index };
};

let CardsContainer = connect(
  mapStateToProps,
  mapActionToProps
)(Cards);
export default CardsContainer;
