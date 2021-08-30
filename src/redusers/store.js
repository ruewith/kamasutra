import { combineReducers, createStore } from "redux";

import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
});

let store = createStore(redusers);

export default store;
