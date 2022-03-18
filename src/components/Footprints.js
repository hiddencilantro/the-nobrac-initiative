import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import { getFootprints } from '../redux/actions/actionCreators';

function Footprints({setLogin}) {
    if(localStorage.getItem('jwt')) {
        const user = useSelector(state => state.user);
        const footprints = useSelector(state => state.footprints);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(getFootprints(user.id));
        }, []);

        const previousFootprints = footprints.map(footprint => <li key={footprint.id}><NavLink to={`${footprint.id}`}>{footprint.date}</NavLink></li>)
    
        return (
            <div>
                <h3>My Carbon Footprints</h3>
                <div>
                    <ul>
                        {previousFootprints}
                    </ul>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        );
    } else {
        const navigate = useNavigate();

        useEffect(() => {
            setLogin(pS => !pS);
            navigate('/')
        }, []);

        return null;
    };
}

export default Footprints;