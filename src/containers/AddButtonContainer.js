import { connect } from "react-redux";
// import {dispatch} from 'redux';
import AddButton from "../components/AddButton.jsx";
import addNote from "../actions/addNotes.js";
import clearInput from "../actions/clearInput.js";
const mapActionToProps = dispatch => {
  return {
    onAdd: data => {
      dispatch(addNote(data));
      dispatch(clearInput());
    }
  };
};

const mapStateToProps = state => {
  return {
    data: state.userData
  };
};

let AddButtonContainer = connect(
  mapStateToProps,
  mapActionToProps
)(AddButton);
export default AddButtonContainer;
