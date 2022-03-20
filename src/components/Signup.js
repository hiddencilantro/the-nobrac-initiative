import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Dialog, Alert } from '@mui/material'
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

    return (
        <>
            <Modal open={signup}>
                <div>
                    <button type="button" onClick={() => setSignup(pS => !pS)}>X</button>
                    <form onSubmit={handleSubmit} >
                        <input type="text" id="first" name="first_name" placeholder="First Name" onChange={handleChange} /><br />
                        <input type="text" id="last" name="last_name" placeholder="Last Name" onChange={handleChange} /><br />
                        <input type="text" id="email" name="email" placeholder="Email" onChange={handleChange} /><br />
                        <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} /><br />
                        <input type="submit" value="Sign up" />
                    </form>
                    <span>Already have an account?</span><button type="button" onClick={handleLogin} >Log in</button>
                </div>
            </Modal>
            <Dialog open={success} >
                <Alert severity="success" onClose={() => setSuccess(pS => !pS)} >
                    Account successfully created
                </Alert>
            </Dialog>
            <Dialog open={error.open} >
                <Alert severity="error" onClose={() => setError(pS => ({open: !pS.open, msg: []}))} >
                    <ul>
                        {error.msg.map(msg => <li>{msg}</li>)}
                    </ul>
                </Alert>
            </Dialog>
        </>
    );
}

export default Signup;