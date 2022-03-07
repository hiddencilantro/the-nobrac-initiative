import { useEffect } from 'react';
import ShortFlightInput from './inputs/ShortFlightInput';
import MediumFlightInput from './inputs/MediumFlightInput';
import LongFlightInput from './inputs/LongFlightInput';

function Flight({setActiveStep, toggle, setToggle, checked, setChecked, flight, setFlight}) {
    useEffect(() => {
        setActiveStep(2);
        setToggle(null);
        setChecked({
            short: false,
            medium: false,
            long: false
        });
    }, []);

    const handleCheckbox = e => {
        setChecked(pS => ({...pS, [e.target.name]: e.target.checked}));
    };

    return (
        <>
            <p>Do you do any air travel?</p>
            <div onChange={e => setToggle(e.target.value)} >
                <input type="radio" name="flight" value={true} /> Yes
                <input type="radio" name="flight" value={false} /> No
            </div>
            {toggle === "true" ? 
                (<div>
                    <p>What type of flights do you take? (Select all that apply)</p>
                    <input type="checkbox" name="short" checked={checked.short} onChange={handleCheckbox} /> {"Short (< 300 miles)"}<br />
                    <input type="checkbox" name="medium" checked={checked.medium} onChange={handleCheckbox} /> {"Medium (>= 300 miles, < 2300 miles)"}<br />
                    <input type="checkbox" name="long" checked={checked.long} onChange={handleCheckbox} /> {"Long (>= 2300 miles)"}<br />
                </div>) 
                : null}
            <br />
            <ShortFlightInput display={toggle} checked={checked.short} distance={flight.short.parameters.distance} setFlight={setFlight} />
            <MediumFlightInput display={toggle} checked={checked.medium} distance={flight.medium.parameters.distance} setFlight={setFlight} />
            <LongFlightInput display={toggle} checked={checked.long} distance={flight.long.parameters.distance} setFlight={setFlight} />
        </>
    );
}

export default Flight;