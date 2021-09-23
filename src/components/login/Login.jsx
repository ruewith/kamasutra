import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { reduxForm, Field } from "redux-form";

import styles from "./Login.module.sass";

import { Input, createField } from "../common/form-controls";
import { login } from "../../reducers/auth-reducer";
import { maxLengthValidator, requiredFieldValidator } from "../../utils/validators";

const maxLength20 = maxLengthValidator(20);

const Login = (props) => {
    const onFormSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"} />;
    }

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
            {createField("Email", "email", [requiredFieldValidator], Input)}
            {createField("Password", "password", [requiredFieldValidator], Input, { type: "password" })}
            {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}
            {props.error && <div className={styles.summaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginRxForm = reduxForm({
    form: "login",
})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
