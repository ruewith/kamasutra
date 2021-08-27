const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReduser = (state, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.messageText = action.text;
            return state;
        case SEND_MESSAGE:
            const newMessage = { id: 7, message: state.messageText };
            state.messages.push(newMessage);
            state.messageText = "";
            return state;
        default:
            return state;
    }
};

export default dialogsReduser;
