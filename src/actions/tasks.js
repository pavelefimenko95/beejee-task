import axios from 'axios';
import reactCookies from 'react-cookies';
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
                tasksList: response.data.message.tasks,
                totalTasksCount: response.data.message.total_task_count
            }
        });
    } catch(e) {
        console.error(e);
    }
};

export const createTask = data => async () => {
    let form = new FormData();
    form.append("username", data.username || '');
    form.append("email", data.email || '');
    form.append("text", data.text || '');

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
};

export const editTask = (toEdit, task) => async dispatch => {
    let form = new FormData();

    if (toEdit.text) {
        form.append("text", toEdit.text || '');
        task.text = toEdit.text;
    }
    if (toEdit.status) {
        form.append("status", toEdit.status || '');
        task.status = toEdit.status;
    }

    form.append('token', reactCookies.load('token'));

    const response = await axios.post('https://uxcandy.com/~shapoval/test-task-backend/v2/edit/' + task.id, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params: {
            developer: config.developer
        }
    });

    if(response.data.status !== 'ok')
        throw response.data.message;

    dispatch({
        type: constants.EDIT_TASK,
        payload: {task}
    });
};