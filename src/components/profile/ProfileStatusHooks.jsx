import React, { useEffect, useState } from "react";

import styles from "./Profile.module.sass";

const ProfileStatus = ({ status, updateStatus }) => {
    const [editMode, setEditMode] = useState(false);
    const [statusValue, setStatusValue] = useState(status);

    useEffect(() => {
        setStatusValue(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(statusValue);
    };

    const onStatusChange = (event) => {
        setStatusValue(event.currentTarget.value);
    };

    return (
        <div className={styles.profileStatus}>
            {!editMode && (
                <div>
                    <span onDoubleClick={activateEditMode}>{status || "-------"}</span>
                </div>
            )}
            {editMode && (
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={statusValue} />
                </div>
            )}
        </div>
    );
};

export default ProfileStatus;
