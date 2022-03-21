import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material'
import { getFootprints } from '../redux/actions/actionCreators';

function Footprints({setLogin, createSuccess, setCreateSuccess, deleteSuccess, setDeleteSuccess}) {
    if(localStorage.getItem('jwt')) {
        const user = useSelector(state => state.user);
        const footprints = useSelector(state => state.footprints);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(getFootprints(user.id));
        }, []);

        const handleCreateSnackbar = (e, reason) => {
            if(reason === 'clickaway') {
                return;
            };
            setCreateSuccess(pS => !pS);
        };

        const handleDeleteSnackbar = (e, reason) => {
            if(reason === 'clickaway') {
                return;
            };
            setDeleteSuccess(pS => !pS);
        };

        const footprintsList = footprints.map(footprint => <li key={footprint.id}><NavLink to={`${footprint.id}`}>{footprint.date}</NavLink></li>);
    
        return (
            <div>
                <h3>{user.first_name}'s Carbon Footprints</h3>
                <div>
                    {footprints.length !== 0 ? 
                        <ul>
                            {footprintsList}
                        </ul>
                        : "You have no saved footprints"}
                </div>
                <div>
                    <Outlet />
                </div>
                <Snackbar open={createSuccess} autoHideDuration={3000} onClose={handleCreateSnackbar} anchorOrigin={{vertical: "top", horizontal: "center"}} >
                    <Alert severity="success" onClose={handleCreateSnackbar} >
                        Carbon footprint saved
                    </Alert>
                </Snackbar>
                <Snackbar open={deleteSuccess} autoHideDuration={3000} onClose={handleDeleteSnackbar} anchorOrigin={{vertical: "top", horizontal: "center"}} >
                    <Alert severity="success" onClose={handleDeleteSnackbar} >
                        Carbon footprint deleted
                    </Alert>
                </Snackbar>
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