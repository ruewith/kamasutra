import React from "react";

import styles from "./FormControls.module.sass";

export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? styles.error : ""}>
            <p>
                <textarea {...input} {...props} />
            </p>
            <p>{hasError && <span>{meta.error}</span>}</p>
        </div>
    );
};

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? styles.error : ""}>
            <p>
                <input {...input} {...props} />
            </p>
            <p>{hasError && <span>{meta.error}</span>}</p>
        </div>
    );
};
