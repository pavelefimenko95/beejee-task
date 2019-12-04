import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import * as constants from '../constants/actions/tasks';
import config from '../utils/config';

export const loadTasks = (params = {}) => async dispatch => {
    try {
        const response = await axios.get('https://uxcandy.com/~shapoval/test-task-backend/v2/', {
            params: {
                ...params,
                developer: config.developer
            }
        });

        if(response.data.status !== 'ok')
            throw response.data.message;

        dispatch({
            type: constants.LOAD_TASKS,
            payload: {
                tasksList: response.data.message.tasks
            }
        });
    } catch(e) {
        console.error(e);
    }
};

export const createTask = data => async dispatch => {
    let form = new FormData();
    form.append("username", data.username);
    form.append("email", data.email);
    form.append("text", data.text);

    const response = await axios.post('https://uxcandy.com/~shapoval/test-task-backend/v2/create', form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params: {
            developer: config.developer
        }
    });

    if(response.data.status !== 'ok')
        throw response.data.message;

    NotificationManager.success('Task created successfully');

    dispatch({
        type: constants.CREATE_TASK,
        payload: {
            task: response.data.message
        }
    });
};