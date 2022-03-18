import { SET_USER, SET_FOOTPRINTS, ADD_FOOTPRINT, LOGOUT } from '../actions/actionTypes';

const initialState = {
    user: null,
    footprints: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case SET_FOOTPRINTS:
            return {
                ...state,
                footprints: action.payload
            };
        case ADD_FOOTPRINT:
            return {
                ...state,
                footprints: [...state.footprints, action.payload]
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    };
}