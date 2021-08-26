import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";

import store from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} />, document.getElementById("root"));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
