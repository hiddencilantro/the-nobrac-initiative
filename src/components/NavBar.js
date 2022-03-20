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
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mission">Mission</NavLink>
            <NavLink to="survey/vehicle">Survey</NavLink>
            {user ? 
                <NavLink to="/footprints">My Carbon Footprints</NavLink>
                : null}
            {user ? 
                <button type="button" onClick={handleLogout} >Logout</button>
                : <button type="button" onClick={() => setLogin(pS => !pS)}>Log in</button>}
        </nav>
    );
}

export default NavBar;