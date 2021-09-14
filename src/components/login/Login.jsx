import React from "react";
import { reduxForm, Field } from "redux-form";

import styles from "./Login.module.sass";

const Login = () => {
    const onFormSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <LoginRxForm onSubmit={onFormSubmit} />
        </div>
    );
};

const LoginForm = (props) => {
    return (
        <form className={styles.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"login"} component={"input"} />
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={"input"} />
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginRxForm = reduxForm({
    form: "login",
})(LoginForm);

export default Login;
