import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BusInput from '../forms/BusInput';
import RapidInput from '../forms/RapidInput';
import CommuterInput from '../forms/CommuterInput';
import IntercityInput from '../forms/IntercityInput';

function PublicTransit({bus, setBus, rapid, setRapid, commuter, setCommuter, intercity, setIntercity}) {
    const [toggle, setToggle] = useState(null);
    const [checked, setChecked] = useState({
        bus: false,
        rapid: false,
        commuter: false,
        intercity: false
    });
    const navigate = useNavigate();

    const handleCheckbox = e => {
        setChecked(pS => ({...pS, [e.target.name]: e.target.checked}));
    };

    const handleNext = () => {
        if(toggle === "false") {
            setBus(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
            setRapid(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
            setCommuter(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
            setIntercity(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
        } else {
            (!checked.bus || isNaN(bus)) ? setBus(pS => ({...pS, parameters: {...pS.parameters, distance: 0}})) : null;
            (!checked.rapid || isNaN(rapid)) ? setRapid(pS => ({...pS, parameters: {...pS.parameters, distance: 0}})) : null;
            (!checked.commuter || isNaN(commuter)) ? setCommuter(pS => ({...pS, parameters: {...pS.parameters, distance: 0}})) : null;
            (!checked.intercity || isNaN(intercity)) ? setIntercity(pS => ({...pS, parameters: {...pS.parameters, distance: 0}})) : null;
        };
        navigate('/survey/transport/flight');
    };

    return (
        <>
            <p>Do you ride public transit?</p>
            <div onChange={e => setToggle(e.target.value)} >
                <input type="radio" name="public-transit" value={true} /> Yes
                <input type="radio" name="public-transit" value={false} /> No
            </div>
            {toggle === "true" ? 
                (<div>
                    <p>Which public transit do you use? (Select all that apply)</p>
                    <input type="checkbox" name="bus" checked={checked.bus} onChange={handleCheckbox} /> Bus<br />
                    <input type="checkbox" name="rapid" checked={checked.rapid} onChange={handleCheckbox} /> Rapid Transit (Subway/Metro/Tram)<br />
                    <input type="checkbox" name="commuter" checked={checked.commuter} onChange={handleCheckbox} /> Commuter Rail (Train)<br />
                    <input type="checkbox" name="intercity" checked={checked.intercity} onChange={handleCheckbox} /> Intercity Rail (Amtrak)
                </div>) 
                : null}
            <br />
            <BusInput display={toggle} checked={checked.bus} bus={bus} setBus={setBus} />
            <RapidInput display={toggle} checked={checked.rapid} rapid={rapid} setRapid={setRapid} />
            <CommuterInput display={toggle} checked={checked.commuter} commuter={commuter} setCommuter={setCommuter} />
            <IntercityInput display={toggle} checked={checked.intercity} intercity={intercity} setIntercity={setIntercity} />
            {toggle !== null ? 
                <button type="button" onClick={handleNext}>Next</button> 
                : null}
        </>
    );
}

export default PublicTransit;