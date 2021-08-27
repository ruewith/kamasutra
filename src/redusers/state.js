import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, text: "First post", likesCount: 12 },
                { id: 2, text: "Second post", likesCount: 11 },
                { id: 3, text: "Third post", likesCount: 11 },
            ],
            newPostText: "",
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "User 1" },
                { id: 2, name: "User 2" },
                { id: 3, name: "User 3" },
                { id: 4, name: "User 4" },
                { id: 5, name: "User 5" },
            ],
            messages: [
                { id: 1, message: "Message 1" },
                { id: 2, message: "Message 2" },
                { id: 3, message: "Message 3" },
                { id: 4, message: "Message 4" },
                { id: 5, message: "Message 5" },
            ],
            messageText: "",
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log("Clean subscribe function");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
};

export const addPostAC = () => ({ type: ADD_POST });
export const updatePostTextAC = (text) => ({ type: UPDATE_POST_TEXT, text });
export const sendMessageAC = () => ({ type: SEND_MESSAGE });
export const updateMessageTextAC = (text) => ({ type: UPDATE_MESSAGE_TEXT, text });

export default store;
