import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShortFlightInput from '../forms/ShortFlightInput';
import MediumFlightInput from '../forms/MediumFlightInput';
import LongFlightInput from '../forms/LongFlightInput';

function Flight({flight, setFlight}) {
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
            sanitizeInputWithoutCheck();
        } else {
            sanitizeInputWithCheck();
        };
        navigate('/survey/utility/electricity');
    };

    const sanitizeInputWithoutCheck = () => {
        Object.keys(flight).forEach(flightType => {
            setFlight(pS => (
                {...pS, 
                [flightType]: {
                    ...pS[flightType], 
                    parameters: {
                        ...pS[flightType].parameters, 
                        distance: 0
                        }
                    }
                }
            ));
        });
    };

    const sanitizeInputWithCheck = () => {
        Object.entries(flight).forEach(([flightType, obj]) => {
            if(!checked[flightType] || isNaN(obj.parameters.distance)) {
                setFlight(pS => (
                    {...pS, 
                    [flightType]: {
                        ...pS[flightType], 
                        parameters: {
                            ...pS[flightType].parameters, 
                            distance: 0
                            }
                        }
                    }
                ));
            };
        });
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
            {toggle !== null ? 
                <button type="button" onClick={handleNext}>Next</button> 
                : null}
        </>
    );
}

export default Flight;