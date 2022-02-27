import BusForm from '../forms/BusForm';
import RapidForm from '../forms/RapidForm';
import CommuterForm from '../forms/CommuterForm';
import IntercityForm from '../forms/IntercityForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PublicTransit({bus, setBus, rapid, setRapid, commuter, setCommuter, intercity, setIntercity}) {
    const [toggle, setToggle] = useState(null);
    const [checked, setChecked] = useState({
        bus: false,
        rapid: false,
        commuter: false,
        intercity: false
    });
    const navigate = useNavigate();

    const handleNext = e => {
        if(toggle === "false") {
            setBus(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
            setRapid(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
            setCommuter(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
            setIntercity(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
        } else {
            (!checked.bus || bus.parameters.distance === "") ? setBus(pS => ({...pS, parameters: {...pS.parameters, distance: 0}})) : null;
            (!checked.rapid || rapid.parameters.distance == "") ? setRapid(pS => ({...pS, parameters: {...pS.parameters, distance: 0}})) : null;
            (!checked.commuter || commuter.parameters.distance == "") ? setCommuter(pS => ({...pS, parameters: {...pS.parameters, distance: 0}})) : null;
            (!checked.intercity || intercity.parameters.distance === "") ? setIntercity(pS => ({...pS, parameters: {...pS.parameters, distance: 0}})) : null;
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
            <br />
            {toggle === "true" ? (<form>
                <label>Which public transit do you use? (Select all that apply)</label>
                <br /><input type="checkbox" name="bus" checked={checked.bus} onChange={e => setChecked(pS => ({...pS, bus: e.target.checked}))} /> Bus
                <br /><input type="checkbox" name="rapid" checked={checked.rapid} onChange={e => setChecked(pS => ({...pS, rapid: e.target.checked}))} /> Rapid Transit (Subway/Metro/Tram)
                <br /><input type="checkbox" name="commuter" checked={checked.commuter} onChange={e => setChecked(pS => ({...pS, commuter: e.target.checked}))} /> Commuter Rail (Train)
                <br /><input type="checkbox" name="intercity" checked={checked.intercity} onChange={e => setChecked(pS => ({...pS, intercity: e.target.checked}))} /> Intercity Rail (Amtrak)
            </form>) : null}
            <BusForm display={toggle} checked={checked.bus} bus={bus} setBus={setBus} />
            <RapidForm display={toggle} checked={checked.rapid} rapid={rapid} setRapid={setRapid} />
            <CommuterForm display={toggle} checked={checked.commuter} commuter={commuter} setCommuter={setCommuter} />
            <IntercityForm display={toggle} checked={checked.intercity} intercity={intercity} setIntercity={setIntercity} />
            {toggle !== null ? <button onClick={handleNext}>Next</button> : null}
        </>
    );
}

export default PublicTransit;