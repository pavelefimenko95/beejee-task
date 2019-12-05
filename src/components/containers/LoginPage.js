import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { login } from '../../actions/auth';
import LoginForm from './forms/LoginForm';


class LoginPage extends Component {
    onLogin = async formData => {
        try {
            await this.props.actions.login(formData, this.props.history.push);
        } catch(e) {
            if(Object.keys(e).length)
                throw new SubmissionError(e);
            else
                console.error(e);
        }
    };

    render() {
        return (
            <LoginForm onSubmit={this.onLogin} />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        login
    }, dispatch)
});

export default connect(null, mapDispatchToProps)(LoginPage);