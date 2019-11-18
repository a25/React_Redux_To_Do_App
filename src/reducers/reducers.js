import { ADD_NOTES } from "../constants.js";
import { DELETE_NOTES } from "../constants.js";
import { CLEAR_INPUT } from "../constants.js";
import { combineReducers } from "redux";
import { INPUT } from "../constants.js";
const notesData = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTES: {
      let temp = { ...action };
      temp.index = state.length;

      let { data, index } = temp;
      // console.log("addding..action", data, index);
      return [...state, { data, index }];
    }
    case DELETE_NOTES: {
      // console.log("deleyt",state)
      let temp = [...state];
      state.some((item, index) => {
        // console.log("insiii", item.index, action.id);
        if (item.index === action.id) {
          temp.splice(index, 1);
          return true;
        }
        return false;
      });

      return [...temp];
    }
    default: {
      return state;
    }
  }
};

const userData = (state = "", action) => {
  switch (action.type) {
    case INPUT: {
      if (action.data) {
        return action.data;
      }
      return state;
    }

    case CLEAR_INPUT: {
      return "";
    }

    default: {
      return "";
    }
  }
};

const reducer = combineReducers({
  userData,
  notesData
});

export default reducer;
