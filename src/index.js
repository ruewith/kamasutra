import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";

import store from "./redusers/store";

let rerenderEntireTree = () => {
    ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree(store.getState());
});
