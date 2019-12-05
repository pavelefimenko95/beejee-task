import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../UI/TextField';
import Button from '../../UI/Button';

const CreateTaskForm = ({handleSubmit}) =>
    <form onSubmit={handleSubmit} className="create-task-form row">
        <div className="create-task-form__fields col-stretch">
            <Field name="username" placeholder="User name" component={TextField}/>
            <Field name="email" placeholder="Email" component={TextField} />
            <Field name="text" placeholder="Text" component={TextField} />
        </div>
        <Button text="Save task" style="dark" />
    </form>;

export default reduxForm({
    form: 'CreateTaskForm'
})(CreateTaskForm);
