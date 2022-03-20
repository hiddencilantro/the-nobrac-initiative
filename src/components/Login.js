import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Dialog, Alert } from '@mui/material'
import { findUser } from '../redux/actions/actionCreators';

function Login({login, setLogin, setSignup}) {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState({open: false, msg: ""});
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
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
    }

    const handleSignup = () => {
        setLogin(pS => !pS);
        setSignup(pS => !pS);
    }

    return (
        <>
            <Modal open={login}>
                <div>
                    <button type="button" onClick={() => setLogin(pS => !pS)}>X</button>
                    <form onSubmit={handleSubmit} >
                        <input type="text" id="email" name="email" placeholder="Email" onChange={handleChange} /><br />
                        <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} /><br />
                        <input type="submit" value="Log in" />
                    </form>
                    <span>Don't have an account?</span><button type="button" onClick={handleSignup} >Sign up</button>
                </div>
            </Modal>
            <Dialog open={success} >
                <Alert severity="success" onClose={() => setSuccess(pS => !pS)} >
                    Login successful
                </Alert>
            </Dialog>
            <Dialog open={error.open} >
                <Alert severity="error" onClose={() => setError(pS => ({open: !pS.open, msg: ""}))} >
                        {error.msg}
                </Alert>
            </Dialog>
        </>
    );
}

export default Login;