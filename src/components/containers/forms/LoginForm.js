import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../UI/TextField';
import Button from '../../UI/Button';

const LoginForm = ({handleSubmit}) =>
    <div className="login-form">
        <form onSubmit={handleSubmit} className="login-form__wrapper">
            <Field
                name="username"
                placeholder="User name"
                component={TextField}
                className="login-form__field"
            />
            <Field
                name="password"
                type="password"
                placeholder="Password"
                component={TextField}
                className="login-form__field"
            />
            <Button
                text="Login"
                style="dark"
                className="login-form__submit"
            />
        </form>
    </div>;

export default reduxForm({
    form: 'LoginForm'
})(LoginForm);