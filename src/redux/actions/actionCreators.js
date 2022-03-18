import axios from 'axios';
import { SET_USER, SET_FOOTPRINTS, ADD_FOOTPRINT, LOGOUT } from './actionTypes';

const baseURL = 'http://localhost:3001/api/v1';

//POJO actions
export const setUser = user => ({type: SET_USER, payload: user});
export const setFootprints = footprints => ({type: SET_FOOTPRINTS, payload: footprints})
export const addFootprint = footprint => ({type: ADD_FOOTPRINT, payload: footprint});
export const logout = () => ({type: LOGOUT});

//thunk
export const createUser = newUser => {
    return dispatch => {
        axios.post(baseURL+'/users', newUser)
        .then(res => {
            localStorage.setItem("jwt", res.data.jwt);
            dispatch(setUser(res.data.user));
        })
        .catch(err => console.error(err));
    };
};

export const findUser = user => {
    return dispatch => {
        axios.post(baseURL+'/login', user)
        .then(res => {
            localStorage.setItem("jwt", res.data.jwt);
            dispatch(setUser(res.data.user));
        })
        .catch(err => console.error(err));
    };
};

export const getFootprints = id => {
    const token = localStorage.getItem("jwt");
    return dispatch => {
        axios.get(baseURL+`/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => dispatch(setFootprints(res.data.footprints)))
        .catch(err => console.error(err));
    };
}

export const createFootprint = result => {
    const token = localStorage.getItem("jwt");
    return dispatch => {
        axios.post(baseURL+'/footprints', result, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => dispatch(addFootprint(res.data.footprint)))
        .catch(err => console.error(err));
    };
};