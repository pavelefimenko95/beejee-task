import * as constants from '../constants/actions/tasks';

const initialState = {
    tasksList: [],
    totalTasksCount: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.LOAD_TASKS:
            return {
                ...state,
                tasksList: action.payload.tasksList,
                totalTasksCount: action.payload.totalTasksCount
            };
        case constants.EDIT_TASK:
            return {
                ...state,
                tasksList: state.tasksList.map(task => task.id === action.payload.task.id ? action.payload.task : task)
            };
        default:
            return state;
    }
};