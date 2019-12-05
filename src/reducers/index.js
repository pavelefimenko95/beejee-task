import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tasks from './tasks';
import auth from './auth';

export default combineReducers({
    form: formReducer,
    tasks,
    auth
});