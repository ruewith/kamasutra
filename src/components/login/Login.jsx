import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { reduxForm } from "redux-form";

import styles from "./Login.module.sass";

import { Input, createField } from "../common/form-controls";
import { login } from "../../reducers/auth-reducer";
import { requiredFieldValidator } from "../../utils/validators";

const Login = ({ login, isAuth }) => {
    const onFormSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    };

    if (isAuth) {
        return <Redirect to={"/profile"} />;
    }

    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <LoginRxForm onSubmit={onFormSubmit} />
        </div>
    );
};

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            {createField("Email", "email", [requiredFieldValidator], Input)}
            {createField("Password", "password", [requiredFieldValidator], Input, { type: "password" })}
            {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}
            {error && <div className={styles.summaryError}>{error}</div>}
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
