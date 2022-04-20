import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Drawer, Dialog, Snackbar, Alert } from '@mui/material'
import { findUser } from '../redux/actions/actionCreators';

function Login({login, setLogin, setSignup, user, setUser}) {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState({open: false, msg: ""});
    const dispatch = useDispatch();

    const handleChange = e => {
        setUser(pS => ({
            ...pS,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(findUser({user: user}, setSuccess, setError, setLogin));
    };

    const handleSignup = () => {
        setLogin(pS => !pS);
        setSignup(pS => !pS);
    };

    const handleSnackbar = (e, reason) => {
        if(reason === 'clickaway') {
            return;
        };
        setSuccess(pS => !pS);
    };

    return (
        <>
            <Drawer anchor={"right"} open={login} >
                <div className='drawer'>
                    <button type="button" onClick={() => setLogin(pS => !pS)}></button>
                    <h2>Log in</h2>
                    <form onSubmit={handleSubmit} >
                        <input type="text" id="email" name="email" placeholder="Email" onChange={handleChange} /><br />
                        <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} /><br />
                        <input type="submit" value="Log in" />
                    </form>
                    <span>Don't have an account yet?</span>
                    <button type="button" onClick={handleSignup} >Create account</button>
                </div>
            </Drawer>
            <Snackbar open={success} autoHideDuration={2500} onClose={handleSnackbar} anchorOrigin={{vertical: "top", horizontal: "center"}} >
                <Alert variant="filled" severity="success" onClose={handleSnackbar} >
                    You have successfully logged in
                </Alert>
            </Snackbar>
            <Dialog open={error.open} >
                <Alert severity="error" onClose={() => setError(pS => ({open: !pS.open, msg: ""}))} >
                        {error.msg}
                </Alert>
            </Dialog>
        </>
    );
}

export default Login;