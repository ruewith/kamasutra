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
                {!this.state.editMode && (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
                    </div>
                )}
                {this.state.editMode && (
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
