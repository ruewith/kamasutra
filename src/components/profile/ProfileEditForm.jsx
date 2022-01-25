import React from "react";

import { createField, Input, Textarea } from "../common/form-controls";
import style from "../common/form-controls/FormControls.module.sass";
import { reduxForm } from "redux-form";

const ProfileEditForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>

            <div>
                <b>Professional skills</b>:
                {createField("Professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>

            <div>
                <b>About me</b>:{createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>:
                <ul>
                    {Object.keys(profile.contacts).map((key) => {
                        return (
                            <li key={key}>
                                <b>
                                    {key}: {createField(key, `contacts.${key}`, [], Input)}
                                </b>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {error && (
                <div className={style.error}>
                    <span>{error}</span>
                </div>
            )}
            <div>
                <button>Save</button>
            </div>
        </form>
    );
};

const ProfileEditFormRx = reduxForm({ form: "edit-profile" })(ProfileEditForm);

export default ProfileEditFormRx;
