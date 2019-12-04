import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../UI/TextField';
import Button from '../../UI/Button';

const validate = ({username, email, text}) => {
    let errors = {};

    if(!username)
        errors.username = 'Required';

    if(!email)
        errors.email = 'Required';

    if(!text)
        errors.text = 'Required';

    return errors;
};

const CreateTaskForm = ({handleSubmit}) =>
    <form onSubmit={handleSubmit} className="create-task-form row">
        <div className="create-task-form__fields col-stretch">
            <Field name="username" placeholder="User name" component={TextField}/>
            <Field name="email" placeholder="Email" component={TextField} />
            <Field name="text" placeholder="Text" component={TextField} />
        </div>
        <Button text="Submit" style="dark" />
    </form>;

export default reduxForm({
    form: 'CreateTaskForm',
    validate
})(CreateTaskForm);
