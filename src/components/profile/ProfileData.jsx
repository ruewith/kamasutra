import React from "react";

const ProfileData = ({ profile, isOwner, setEditMode }) => {
    return (
        <div>
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob && (
                <div>
                    <b>Professional skills</b>: {profile.lookingForAJobDescription}
                </div>
            )}

            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>:
                <ul>
                    {Object.keys(profile.contacts).map((key) => {
                        return (
                            <li key={key}>
                                <b>
                                    {key}: {profile.contacts[key] ? profile.contacts[key] : "---"}
                                </b>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {isOwner && (
                <div>
                    <button onClick={setEditMode}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default ProfileData;
