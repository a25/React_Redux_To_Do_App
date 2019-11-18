import { connect } from "react-redux";
import Input from "../components/Input.jsx";
import onInput from "../actions/onInput.js";

const mapStateToProps = state => {
  return {
    userInput: state.userData
  };
};

const mapActionToProps = dispatch => {
  return {
    onChange: event => {
      dispatch(onInput(event.target.value));
    }
  };
};

let InputContainer = connect(
  mapStateToProps,
  mapActionToProps
)(Input);
export default InputContainer;
