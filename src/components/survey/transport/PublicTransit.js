import { useEffect } from 'react';
import BusInput from './inputs/BusInput';
import RapidInput from './inputs/RapidInput';
import CommuterInput from './inputs/CommuterInput';
import IntercityInput from './inputs/IntercityInput';

function PublicTransit({setActiveStep, toggle, setToggle, checked, setChecked, publicTransit, setPublicTransit}) {
    useEffect(() => {
        setActiveStep(1);
        setToggle(null);
        setChecked({
            bus: false,
            rapid: false,
            commuter: false,
            intercity: false
        });
    }, []);

    const handleCheckbox = e => {
        setChecked(pS => ({...pS, [e.target.name]: e.target.checked}));
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
            <BusInput display={toggle} checked={checked.bus} distance={publicTransit.bus.parameters.distance} setPublicTransit={setPublicTransit} />
            <RapidInput display={toggle} checked={checked.rapid} distance={publicTransit.rapid.parameters.distance} setPublicTransit={setPublicTransit} />
            <CommuterInput display={toggle} checked={checked.commuter} distance={publicTransit.commuter.parameters.distance} setPublicTransit={setPublicTransit} />
            <IntercityInput display={toggle} checked={checked.intercity} distance={publicTransit.intercity.parameters.distance} setPublicTransit={setPublicTransit} />
        </>
    );
}

export default PublicTransit;