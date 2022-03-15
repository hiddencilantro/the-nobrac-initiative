import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mission">Mission</NavLink>
            <NavLink to="survey/vehicle">Carbon Footprint</NavLink>
        </nav>
    );
}

export default NavBar;