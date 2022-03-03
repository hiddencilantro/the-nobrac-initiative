import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LimitedServiceInput from '../forms/LimitedServiceInput';
import FullServiceInput from '../forms/FullServiceInput.js';
import OtherInput from '../forms/OtherInput';

function Dining({dining, setDining}) {
    const [toggle, setToggle] = useState(null);
    const [checked, setChecked] = useState({
        limited: false,
        full: false,
        other: false
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
        navigate('/survey/consumption/tobacco');
    };

    const sanitizeInputWithoutCheck = () => {
        Object.keys(dining).forEach(diningType => {
            setDining(pS => ({
                ...pS, 
                [diningType]: {
                    ...pS[diningType], 
                    parameters: {
                        ...pS[diningType].parameters, 
                        distance: 0
                    }
                }
            }));
        });
    };

    const sanitizeInputWithCheck = () => {
        Object.entries(dining).forEach(([diningType, obj]) => {
            if(!checked[diningType] || isNaN(obj.parameters.distance)) {
                setDining(pS => ({
                    ...pS, 
                    [diningType]: {
                        ...pS[diningType], 
                        parameters: {
                            ...pS[diningType].parameters, 
                            distance: 0
                        }
                    }
                }));
            };
        });
    };

    return (
        <>
            <p>Do you ever eat out?</p>
            <div onChange={e => setToggle(e.target.value)} >
                <input type="radio" name="dining" value={true} /> Yes
                <input type="radio" name="dining" value={false} /> No
            </div>
            {toggle === "true" ? 
                (<div>
                    <p>What type of dining experience do you take part in? (Select all that apply)</p>
                    <input type="checkbox" name="limited" checked={checked.limited} onChange={handleCheckbox} /> Limited-service Restaurants (i.e. fast food, casual restaurants, cafes)<br />
                    <input type="checkbox" name="full" checked={checked.full} onChange={handleCheckbox} /> Full-service Restaurants (i.e. typical sit-and-dine restaurants with wait staff)<br />
                    <input type="checkbox" name="other" checked={checked.other} onChange={handleCheckbox} /> All other food and drinking places<br />
                </div>) 
                : null}
            <br />
            <LimitedServiceInput display={toggle} checked={checked.limited} money={dining.limited.parameters.money} setDining={setDining} />
            <FullServiceInput display={toggle} checked={checked.full} money={dining.full.parameters.money} setDining={setDining} />
            <OtherInput display={toggle} checked={checked.other} money={dining.other.parameters.money} setDining={setDining} />
            {toggle !== null ? 
                <button type="button" onClick={handleNext}>Next</button> 
                : null}
        </>
    );
}

export default Dining;