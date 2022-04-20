import axios from 'axios';
import { SET_USER, SET_FOOTPRINTS, ADD_FOOTPRINT, LOGOUT, DELETE_FOOTPRINT } from './actionTypes';

const baseURL = 'https://nobrac-rails.herokuapp.com/api/v1';

//POJO actions
export const setUser = user => ({type: SET_USER, payload: user});
export const setFootprints = footprints => ({type: SET_FOOTPRINTS, payload: footprints});
export const addFootprint = footprint => ({type: ADD_FOOTPRINT, payload: footprint});
export const deleteFootprint = id => ({type: DELETE_FOOTPRINT, payload: id});
export const logout = () => ({type: LOGOUT});

//thunk
export const createUser = (newUser, setSuccess, setError, setSignup) => {
    return dispatch => {
        axios.post(baseURL+'/users', newUser)
        .then(res => {
            if(res.status !== 201) {
                throw Error("Something went wrong.");
            }; // for any 2xx status code that wasn't intended
            localStorage.setItem("jwt", res.data.jwt);
            dispatch(setUser(res.data.user));
            setSuccess(pS => !pS);
            setSignup(pS => !pS);
        })
        .catch(err => {
            if(err.response.status === 422) {
                setError(pS => ({open: !pS.open, msg: err.response.data}));
            } else {
                console.error(err);
            };
        });
    };
};

export const findUser = (user, setSuccess, setError, setLogin) => {
    return dispatch => {
        axios.post(baseURL+'/login', user)
        .then(res => {
            if(res.status !== 201) {
                throw Error("Something went wrong.");
            };
            localStorage.setItem("jwt", res.data.jwt);
            dispatch(setUser(res.data.user));
            setSuccess(pS => !pS);
            setLogin(pS => !pS);
        })
        .catch(err => {
            if(err.response.status === 401 || err.response.status === 404 || err.response.status === 422 ) {
                setError(pS => ({open: !pS.open, msg: err.response.data.message}));
            } else {
                console.error(err);
            };
        });
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
        .then(res => {
            if(res.status !== 202) {
                throw Error("Something went wrong.");
            };
            dispatch(setFootprints(res.data.footprints));
        })
        .catch(err => {
            if(err.response.status === 401) {
                alert(err.response.data.message);
            } else {
                console.error(err);
            };
        });
    };
};

export const createFootprint = (result, setSuccess) => {
    const token = localStorage.getItem("jwt");
    return dispatch => {
        axios.post(baseURL+'/footprints', result, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            if(res.status !== 201) {
                throw Error("Something went wrong.");
            };
            dispatch(addFootprint(res.data.footprint));
            setSuccess(pS => !pS);
        })
        .catch(err => {
            if(err.response.status === 422) {
                alert(err.response.data.join(', '));
            } else if (err.response.status === 401) {
                alert(err.response.data.message);
            } else {
                console.error(err);
            };
        });
    };
};

export const destroyFootprint = (id, setSuccess) => {
    const token = localStorage.getItem("jwt");
    return dispatch => {
        axios.delete(baseURL+`/footprints/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            dispatch(deleteFootprint(id));
            setSuccess(pS => !pS);
        })
        .catch(err => {
            if(err.response.status === 401 || err.response.status === 404) {
                alert(err.response.data.message);
            } else {
                console.error(err);
            };
        });
    };
};