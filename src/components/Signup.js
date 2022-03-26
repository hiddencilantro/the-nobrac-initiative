import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Drawer, Dialog, Snackbar, Alert } from '@mui/material'
import { createUser } from '../redux/actions/actionCreators';

function Signup({signup, setSignup, setLogin}) {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState({open: false, msg: []});
    const [newUser, setNewUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });
    const dispatch = useDispatch();

    const handleChange = e => {
        setNewUser(pS => ({
            ...pS,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createUser({user: newUser}, setSuccess, setError, setSignup));
    };

    const handleLogin = () => {
        setSignup(pS => !pS);
        setLogin(pS => !pS);
    }

    const handleSnackbar = (e, reason) => {
        if(reason === 'clickaway') {
            return;
        };
        setSuccess(pS => !pS);
    };

    return (
        <>
            <Drawer anchor={"right"} open={signup} >
                <div className='drawer'>
                    <button type="button" onClick={() => setSignup(pS => !pS)}></button>
                    <h2>Create an account</h2>
                    <form onSubmit={handleSubmit} >
                        <input type="text" id="first" name="first_name" placeholder="First name" onChange={handleChange} /><br />
                        <input type="text" id="last" name="last_name" placeholder="Last lame" onChange={handleChange} /><br />
                        <input type="text" id="email" name="email" placeholder="Email" onChange={handleChange} /><br />
                        <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} /><br />
                        <input type="submit" value="Sign up" />
                    </form>
                    <span>Already have an account?</span>
                    <button type="button" onClick={handleLogin} >Log in</button>
                </div>
            </Drawer>
            <Snackbar open={success} autoHideDuration={3000} onClose={handleSnackbar} anchorOrigin={{vertical: "top", horizontal: "center"}} >
                <Alert severity="success" onClose={handleSnackbar} >
                    Account successfully created
                </Alert>
            </Snackbar>
            <Dialog open={error.open} >
                <Alert severity="error" onClose={() => setError(pS => ({open: !pS.open, msg: []}))} >
                    <ul>
                        {error.msg.map((msg, idx) => <li key={idx}>{msg}</li>)}
                    </ul>
                </Alert>
            </Dialog>
        </>
    );
}

export default Signup;