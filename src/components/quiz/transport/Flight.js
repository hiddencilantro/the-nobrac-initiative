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
        if(e.target.parentElement.style.backgroundColor === "") {
            e.target.parentElement.style.backgroundColor = "rgb(216, 226, 224)";
        } else {
            e.target.parentElement.style.backgroundColor = "";
        };
    };

    return (
        <>
            <h3>Do you do any air travel?</h3>
            <div onChange={e => setToggle(e.target.value)} >
                <input type="radio" name="flight" value={true} />
                <input type="radio" name="flight" value={false} />
            </div>
            {toggle === "true" ? 
                (<div className='Flight'>
                    <h4>What type of flights do you take?</h4>
                    <p>(Select all that apply)</p>
                    <div className='checkbox-container'>
                        <div>
                            <input type="checkbox" name="short" id="short" checked={checked.short} onChange={handleCheckbox} />
                            <label htmlFor="short">
                                <span>Short</span><br />
                                <span>(0-300 miles)</span>
                            </label>
                            <ShortFlightInput display={toggle} checked={checked.short} distance={flight.short.parameters.distance} setFlight={setFlight} />
                        </div>
                        <div>
                            <input type="checkbox" name="medium" id="medium" checked={checked.medium} onChange={handleCheckbox} />
                            <label htmlFor="medium">
                                <span>Medium</span><br />
                                <span>(300-2300 miles)</span>
                            </label>
                            <MediumFlightInput display={toggle} checked={checked.medium} distance={flight.medium.parameters.distance} setFlight={setFlight} />
                        </div>
                        <div>
                            <input type="checkbox" name="long" id="long" checked={checked.long} onChange={handleCheckbox} />
                            <label htmlFor="long">
                                <span>Long</span><br />
                                <span>(2300+ miles)</span>
                            </label>
                            <LongFlightInput display={toggle} checked={checked.long} distance={flight.long.parameters.distance} setFlight={setFlight} />
                        </div>
                    </div>
                </div>) 
                : null}
        </>
    );
}

export default Flight;