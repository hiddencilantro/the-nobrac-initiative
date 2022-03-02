import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BusInput from '../forms/BusInput';
import RapidInput from '../forms/RapidInput';
import CommuterInput from '../forms/CommuterInput';
import IntercityInput from '../forms/IntercityInput';

function PublicTransit({publicTransit, setPublicTransit}) {
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
            sanitizeInputWithoutCheck();
        } else {
            sanitizeInputWithCheck();
        };
        navigate('/survey/transport/flight');
    };

    const sanitizeInputWithoutCheck = () => {
        Object.keys(publicTransit).forEach(transitType => {
            setPublicTransit(pS => (
                {...pS, 
                [transitType]: {
                    ...pS[transitType], 
                    parameters: {
                        ...pS[transitType].parameters, 
                        distance: 0
                        }
                    }
                }
            ));
        });
    };

    const sanitizeInputWithCheck = () => {
        Object.entries(publicTransit).forEach(([transitType, obj]) => {
            if(!checked[transitType] || isNaN(obj.parameters.distance)) {
                setPublicTransit(pS => (
                    {...pS, 
                    [transitType]: {
                        ...pS[transitType], 
                        parameters: {
                            ...pS[transitType].parameters, 
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
            {toggle !== null ? 
                <button type="button" onClick={handleNext}>Next</button> 
                : null}
        </>
    );
}

export default PublicTransit;