import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";

import store from "./redusers/store";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />,
        document.getElementById("root")
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree(store.getState());
});
