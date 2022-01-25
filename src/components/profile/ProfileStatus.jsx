import React, { Component } from "react";

import styles from "./Profile.module.sass";
class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value,
        });
    };

    render() {
        return (
            <div className={styles.profileStatus}>
                <p>
                    <b>Status: </b>
                    {!this.state.editMode && (
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
                    )}
                    {this.state.editMode && (
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                        />
                    )}
                </p>
            </div>
        );
    }
}

export default ProfileStatus;
