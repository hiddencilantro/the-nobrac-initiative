import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Collapse, Snackbar, Alert, IconButton, Dialog, DialogContent, DialogActions, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { getFootprints, destroyFootprint } from '../redux/actions/actionCreators';
import EmissionData from './EmissionData';
import Tips from './Tips';

function Footprints({setLogin, createSuccess, setCreateSuccess}) {
    if(localStorage.getItem('jwt')) {
        const [expanded, setExpanded] = useState({});
        const [confirm, setConfirm] = useState({});
        const [deleteSuccess, setDeleteSuccess] = useState(false);
        const user = useSelector(state => state.user);
        const footprints = useSelector(state => state.footprints);
        const dispatch = useDispatch();

        useEffect(() => {
            document.body.style.backgroundColor = "#f1f5f5";
            dispatch(getFootprints(user.id));
        }, []);

        useEffect(() => {
            resetState();
        }, [footprints]);

        const resetState = () => {
            setExpanded({});
            setConfirm({});
            footprints.forEach(footprint => {
                setExpanded(pS => ({...pS, [footprint.id]: false}));
                setConfirm(pS => ({...pS, [footprint.id]: false}));
            });
        };

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

        const handleDelete = id => {
            setConfirm(pS => ({...pS, [id]: !pS[id]}));
            dispatch(destroyFootprint(id, setDeleteSuccess));
        };

        const footprintsList = footprints.map(footprint => (
            <div key={footprint.id}>
                <li onClick={() => setExpanded(pS => ({...pS, [footprint.id]: !pS[footprint.id]}))}>
                    <span>{footprint.date}</span>
                    <span>{footprint.total} metric tons</span>
                    <span className='icon-trash' onClick={() => setConfirm(pS => ({...pS, [footprint.id]: !pS[footprint.id]}))} />
                    <span className={expanded[footprint.id] ? 'icon-arrow-up' : 'icon-arrow-down'} />
                    <Dialog open={Object.keys(confirm).length === footprints.length ? confirm[footprint.id] : false} >
                        <DialogContent>Are you sure you want to delete this footprint?</DialogContent>
                        <DialogActions>
                            <Button onClick={() => handleDelete(footprint.id)} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                            <Button onClick={() => setConfirm(pS => ({...pS, [footprint.id]: !pS[footprint.id]}))}>Cancel</Button>
                        </DialogActions>
                    </Dialog>
                </li>
                <Collapse in={expanded[footprint.id]} timeout={800} >
                        <EmissionData footprint={footprint} />
                </Collapse>
            </div>));
    
        return (
            <div className='Footprints'>
                <h3 className='header'>{user.first_name}'s Carbon Footprints</h3>
                <div>
                    {footprints.length !== 0 ? 
                        <ul className='footprints-list'>
                            {footprintsList}
                        </ul>
                        : "You have no saved footprints"}
                </div>
                <Tips />
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