import axios from 'axios';
import reactCookies from 'react-cookies';
import * as constants from '../constants/actions/auth';
import config from '../utils/config';
import store from '../store';

export const login = (data, push) => async dispatch => {
    let form = new FormData();
    form.append("username", data.username || '');
    form.append("password", data.password || '');

    const response = await axios.post('https://uxcandy.com/~shapoval/test-task-backend/v2/login', form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params: {
            developer: config.developer
        }
    });

    if(response.data.status !== 'ok')
        throw response.data.message;

    const token = response.data.message.token;
    reactCookies.save('token', token, {path: '/', maxAge: 60 * 60 * 24});
    push('/');

    dispatch({
        type: constants.LOGIN
    });
};

export const logout = () => dispatch => {
    reactCookies.remove('token', {path: '/'});

    dispatch({
        type: constants.LOGOUT
    });
};

export const checkAuthentication = () => {
    if(reactCookies.load('token')) {
        store.dispatch({
            type: constants.LOGIN
        });
    }
};