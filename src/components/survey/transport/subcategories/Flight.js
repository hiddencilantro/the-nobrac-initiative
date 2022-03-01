import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShortFlightForm from '../forms/ShortFlightForm';
import MediumFlightForm from '../forms/MediumFlightForm';
import LongFlightForm from '../forms/LongFlightForm';

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
            <br />
            {toggle === "true" ? 
                (<form>
                    <label>What type of flights do you take? (Select all that apply)</label>
                    <br /><input type="checkbox" name="short" checked={checked.short} onChange={handleCheckbox} /> {"Short (< 300 miles)"}
                    <br /><input type="checkbox" name="medium" checked={checked.medium} onChange={handleCheckbox} /> {"Medium (>= 300 miles, < 2300 miles)"}
                    <br /><input type="checkbox" name="long" checked={checked.long} onChange={handleCheckbox} /> {"Long (>= 2300 miles)"}
                </form>) 
                : null}
            <ShortFlightForm display={toggle} checked={checked.short} shortFlight={shortFlight} setShortFlight={setShortFlight} />
            <MediumFlightForm display={toggle} checked={checked.medium} mediumFlight={mediumFlight} setMediumFlight={setMediumFlight} />
            <LongFlightForm display={toggle} checked={checked.long} longFlight={longFlight} setLongFlight={setLongFlight} />
            {toggle !== null ? 
                <button onClick={handleNext}>Next</button> 
                : null}
        </>
    );
}

export default Flight;