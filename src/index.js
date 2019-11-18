import React from "react";
import ReactDOM from "react-dom";
import reducer from "./reducers/reducers.js";
import { createStore } from "redux";
import "./styles.css";
import { Provider } from "react-redux";
import App from "./components/App.jsx";
const store = createStore(reducer);

const getPosts = () => {
  let states = store.getState();
  return states;
};

store.subscribe(() => {
  console.log("posts are .....", getPosts());
});

// store.dispatch(addNotes("My NAME IS JHA ASHISH"));
// store.dispatch(addNotes("My NAME IS JHA Abhishek"));
// store.dispatch(addNotes("My NAME IS JHA Krishu"));
// store.dispatch(deleteNotes(0));
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
