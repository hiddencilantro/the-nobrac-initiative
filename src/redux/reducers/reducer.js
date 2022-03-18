import { SET_USER, SET_FOOTPRINTS, ADD_FOOTPRINT } from '../actions/actionTypes';

export default function reducer(state = {
    user: null,
    footprints: []
}, action) {
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
        default:
            return state;
    };
}