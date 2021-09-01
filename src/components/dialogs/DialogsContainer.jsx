import React from "react";
import { connect } from "react-redux";

import { sendMessageAC, updateMessageTextAC } from "../../redusers/dialogs-reduser";

import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text) => {
            dispatch(updateMessageTextAC(text));
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
