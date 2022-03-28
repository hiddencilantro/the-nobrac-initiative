import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/actionCreators';

function NavBar({setLogin}) {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('jwt');
        navigate('/');
    };

    return (
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
    );
}

export default NavBar;