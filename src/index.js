import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./components/redux/redux-store";
import React from "react";
import { Provider } from "react-redux";



let rerenderEntireTree = (state) => {
  ReactDOM.render(
      <Provider store={store}>
      <App
        state={state}
      />
      </Provider>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state)
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
