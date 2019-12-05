import * as constants from '../constants/actions/auth';

const initialState = {
    isAuthenticated: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.LOGIN:
            return {
                ...state,
                isAuthenticated: true
            };
        case constants.LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
};