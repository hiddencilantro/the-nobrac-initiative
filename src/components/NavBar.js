import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/actionCreators';
import { Snackbar, Alert } from '@mui/material';

function NavBar({setLogin, setNewUser, setUser}) {
    const [success, setSuccess] = useState(false);
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('jwt');
        navigate('/');
        setNewUser({
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        });
        setUser({
            email: "",
            password: ""
        });
        setSuccess(pS => !pS);
    };

    const handleSnackbar = (e, reason) => {
        if(reason === 'clickaway') {
            return;
        };
        setSuccess(pS => !pS);
    };

    return (
        <>
            <nav className="Navbar">
                <NavLink to="/">About NOBRAC</NavLink>
                <NavLink to="/problem">The Problem</NavLink>
                <NavLink to="quiz/vehicle">Take a Quiz</NavLink>
                {user ? 
                    <NavLink to="/footprints">My Footprints</NavLink>
                    : null}
                {user ? 
                    <button type="button" onClick={handleLogout} >Logout</button>
                    : <button type="button" onClick={() => setLogin(pS => !pS)}>Log in</button>}
            </nav>
            <Snackbar open={success} autoHideDuration={2500} onClose={handleSnackbar} anchorOrigin={{vertical: "top", horizontal: "center"}} >
                <Alert variant="filled" severity="success" onClose={handleSnackbar} >
                    You have been logged out
                </Alert>
            </Snackbar>
        </>
    );
}

export default NavBar;