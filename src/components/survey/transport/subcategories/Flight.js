import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShortFlightInput from '../forms/ShortFlightInput';
import MediumFlightInput from '../forms/MediumFlightInput';
import LongFlightInput from '../forms/LongFlightInput';

function Flight({shortFlight, setShortFlight, mediumFlight, setMediumFlight, longFlight, setLongFlight}) {
    const [toggle, setToggle] = useState(null);
    const [checked, setChecked] = useState({
        short: false,
        medium: false,
        long: false
    });
    const navigate = useNavigate();

    const handleCheckbox = e => {
        setChecked(pS => ({...pS, [e.target.name]: e.target.checked}));
    };

    const handleNext = () => {
        if(toggle === "false") {
            setShortFlight(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
            setMediumFlight(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
            setLongFlight(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
        } else {
            (!checked.short || isNaN(shortFlight)) ? setShortFlight(pS => ({...pS, parameters: {...pS.parameters, distance: 0}})) : null;
            (!checked.medium || isNaN(mediumFlight)) ? setMediumFlight(pS => ({...pS, parameters: {...pS.parameters, distance: 0}})) : null;
            (!checked.long || isNaN(longFlight)) ? setLongFlight(pS => ({...pS, parameters: {...pS.parameters, distance: 0}})) : null;
        };
        navigate('/survey/utility/electricity');
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
            <ShortFlightInput display={toggle} checked={checked.short} shortFlight={shortFlight} setShortFlight={setShortFlight} />
            <MediumFlightInput display={toggle} checked={checked.medium} mediumFlight={mediumFlight} setMediumFlight={setMediumFlight} />
            <LongFlightInput display={toggle} checked={checked.long} longFlight={longFlight} setLongFlight={setLongFlight} />
            {toggle !== null ? 
                <button type="button" onClick={handleNext}>Next</button> 
                : null}
        </>
    );
}

export default Flight;