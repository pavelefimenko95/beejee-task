import * as constants from '../constants/actions/tasks';

const initialState = {
    tasksList: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.LOAD_TASKS:
            return {
                ...state,
                tasksList: action.payload.tasksList
            };
        case constants.CREATE_TASK:
            return {
                ...state,
                tasksList: [...state.tasksList, action.payload.task]
            };
        default:
            return state;
    }
};