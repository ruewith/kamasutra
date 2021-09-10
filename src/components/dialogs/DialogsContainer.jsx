import React from "react";
import { connect } from "react-redux";

import { sendMessageAC, updateMessageTextAC } from "../../reducers/dialogs-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";

import Dialogs from "./Dialogs";
import { compose } from "redux";

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

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
