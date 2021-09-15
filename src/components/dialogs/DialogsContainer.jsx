import React from "react";
import { connect } from "react-redux";

import { sendMessage } from "../../reducers/dialogs-reducer";
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
        sendMessage: (messageText) => {
            dispatch(sendMessage(messageText));
        },
    };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
