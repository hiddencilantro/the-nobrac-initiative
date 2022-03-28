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
        if(e.target.parentElement.style.backgroundColor === "") {
            e.target.parentElement.style.backgroundColor = "rgb(216, 226, 224)";
        } else {
            e.target.parentElement.style.backgroundColor = "";
        };
    };

    return (
        <>
            <h3>Do you ride public transit?</h3>
            <div onChange={e => setToggle(e.target.value)} >
                <input type="radio" name="public-transit" value={true} />
                <input type="radio" name="public-transit" value={false} />
            </div>
            {toggle === "true" ? 
                (<div>
                    <h4>Which public transit do you use?</h4>
                    <p>(Select all that apply)</p>
                    <div className='checkbox-container'>
                        <div>
                            <input type="checkbox" name="bus" id="bus" checked={checked.bus} onChange={handleCheckbox} />
                            <label htmlFor="bus">
                                <span>Bus</span>
                            </label>
                            <BusInput display={toggle} checked={checked.bus} distance={publicTransit.bus.parameters.distance} setPublicTransit={setPublicTransit} />
                        </div>
                        <div>
                            <input type="checkbox" name="rapid" id="rapid" checked={checked.rapid} onChange={handleCheckbox} />
                            <label htmlFor="rapid">
                                <span>Rapid Transit</span><br />
                                <span>(Subway/Metro/Tram)</span>
                            </label>
                            <RapidInput display={toggle} checked={checked.rapid} distance={publicTransit.rapid.parameters.distance} setPublicTransit={setPublicTransit} />
                        </div>
                        <div>
                            <input type="checkbox" name="commuter" id="commuter" checked={checked.commuter} onChange={handleCheckbox} />
                            <label htmlFor="commuter">
                                <span>Commuter Rail</span><br />
                                <span>(Train)</span>
                            </label>
                            <CommuterInput display={toggle} checked={checked.commuter} distance={publicTransit.commuter.parameters.distance} setPublicTransit={setPublicTransit} />
                        </div>
                        <div>
                            <input type="checkbox" name="intercity" id="intercity" checked={checked.intercity} onChange={handleCheckbox} />
                            <label htmlFor="intercity">
                                <span>Intercity Rail</span><br />
                                <span>(Amtrak)</span>
                            </label>
                            <IntercityInput display={toggle} checked={checked.intercity} distance={publicTransit.intercity.parameters.distance} setPublicTransit={setPublicTransit} />
                        </div>
                    </div>
                </div>) 
                : null}
        </>
    );
}

export default PublicTransit;