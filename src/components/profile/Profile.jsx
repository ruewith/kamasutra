import React from "react";

import ProfileInfo from "./ProfileInfo";
import { PostsContainer } from "../posts";

const Profile = ({ store, profile, status, updateStatus, isOwner, savePhoto }) => {
    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                isOwner={isOwner}
                savePhoto={savePhoto}
            />
            <PostsContainer store={store} />
        </div>
    );
};

export default Profile;
