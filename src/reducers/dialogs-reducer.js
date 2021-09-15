const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
    dialogs: [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
    ],
    messages: [
        { id: 1, message: "Message 1" },
        { id: 2, message: "Message 2" },
        { id: 3, message: "Message 3" },
        { id: 4, message: "Message 4" },
        { id: 5, message: "Message 5" },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 7, message: action.messageText }],
            };
        default:
            return state;
    }
};

export default dialogsReducer;

export const sendMessage = (messageText) => ({ type: SEND_MESSAGE, messageText });
