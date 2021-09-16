import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { reduxForm, Field } from "redux-form";

import styles from "./Login.module.sass";

import { Input } from "../common/form-controls";
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
            <div>
                <Field
                    placeholder={"E-mail"}
                    name={"email"}
                    component={Input}
                    validate={[requiredFieldValidator, maxLength20]}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name={"password"}
                    type={"password"}
                    component={Input}
                    validate={[requiredFieldValidator, maxLength20]}
                />
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
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
