import React from "react";

import Profile from "./Profile";
import { PostsContainer } from "../posts";

const ProfilePage = (props) => {
    const { store, profile, status, updateStatus, isOwner, savePhoto, editProfile } = props;
    return (
        <div>
            <Profile
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                isOwner={isOwner}
                savePhoto={savePhoto}
                editProfile={editProfile}
            />
            <PostsContainer store={store} />
        </div>
    );
};

export default ProfilePage;
