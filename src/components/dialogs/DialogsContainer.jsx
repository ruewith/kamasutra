import React from "react";
import { connect } from "react-redux";

import { sendMessageAC, updateMessageTextAC } from "../../reducers/dialogs-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs));

export default DialogsContainer;
