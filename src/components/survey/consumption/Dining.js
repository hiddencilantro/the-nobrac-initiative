import { useEffect } from 'react';
import LimitedServiceInput from './inputs/LimitedServiceInput';
import FullServiceInput from './inputs/FullServiceInput.js';
import OtherInput from './inputs/OtherInput';

function Dining({setActiveStep, toggle, setToggle, checked, setChecked, dining, setDining}) {
    useEffect(() => {
        setActiveStep(8);
        setToggle(null);
        setChecked({
            limited: false,
            full: false,
            other: false
        });
    }, []);

    const handleCheckbox = e => {
        setChecked(pS => ({...pS, [e.target.name]: e.target.checked}));
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
        </>
    );
}

export default Dining;