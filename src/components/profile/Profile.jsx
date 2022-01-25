import React, { useState } from "react";

import styles from "./Profile.module.sass";

import { Preloader } from "../common";
import ProfileStatus from "./ProfileStatus";
import ProfileData from "./ProfileData";
import ProfileTitle from "./ProfileTitle";
import ProfileAvatar from "./ProfileAvatar";
import ProfileEditForm from "./ProfileEditForm";

const Profile = ({ profile, status, updateStatus, isOwner, savePhoto, editProfile }) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />;
    }

    const editProfileSubmit = (formData) => {
        editProfile(formData).then(() => {
            setEditMode(false);
        });
    };

    return (
        <div className={styles.profile}>
            <ProfileAvatar photos={profile.photos} savePhoto={savePhoto} isOwner={isOwner} />

            <ProfileTitle fullName={profile.fullName} />

            <ProfileStatus status={status} updateStatus={updateStatus} />

            {editMode ? (
                <ProfileEditForm initialValues={profile} profile={profile} onSubmit={editProfileSubmit} />
            ) : (
                <ProfileData setEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner} />
            )}
        </div>
    );
};

export default Profile;
