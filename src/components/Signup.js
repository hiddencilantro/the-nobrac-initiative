import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '@mui/material'
import { createUser } from '../redux/actions/actionCreators';

function Signup({signup, setSignup, setLogin}) {
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
        dispatch(createUser({user: newUser}));
        alert("Your account was created!");
        setSignup(pS => !pS);
    };

    const handleLogin = () => {
        setSignup(pS => !pS);
        setLogin(pS => !pS);
    }

    return (
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
    );
}

export default Signup;