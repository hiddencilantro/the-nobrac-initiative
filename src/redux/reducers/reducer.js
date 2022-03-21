import { SET_USER, SET_FOOTPRINTS, ADD_FOOTPRINT, DELETE_FOOTPRINT, LOGOUT } from '../actions/actionTypes';

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
        case DELETE_FOOTPRINT:
            const idx = state.footprints.findIndex(f => f.id === action.payload);
            return {
                ...state,
                footprints: [...state.footprints.slice(0, idx), ...state.footprints.slice(idx + 1)]
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    };
}