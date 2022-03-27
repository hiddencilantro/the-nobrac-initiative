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
        if(e.target.parentElement.style.backgroundColor === "rgb(216, 226, 224)") {
            e.target.parentElement.style.backgroundColor = "rgb(241, 245, 245)";
        } else {
            e.target.parentElement.style.backgroundColor = "rgb(216, 226, 224)";
        };
    };

    return (
        <>
            <h3>Do you ever eat out?</h3>
            <div onChange={e => setToggle(e.target.value)} >
                <input type="radio" name="dining" value={true} />
                <input type="radio" name="dining" value={false} />
            </div>
            {toggle === "true" ? 
                (<div>
                    <h4>What type of dining experience do you take part in?</h4>
                    <p>(Select all that apply)</p>
                    <div className='checkbox-container'>
                        <div>
                            <input type="checkbox" name="limited" id="limited" checked={checked.limited} onChange={handleCheckbox} />
                            <label htmlFor="limited">
                                <span>Limited-service</span><br />
                                <span>(fast food, casual restaurants, cafes)</span>
                            </label>
                            <LimitedServiceInput display={toggle} checked={checked.limited} money={dining.limited.parameters.money} setDining={setDining} />
                        </div>
                        <div>
                            <input type="checkbox" name="full" id="full" checked={checked.full} onChange={handleCheckbox} />
                            <label htmlFor="full">
                                <span>Full-service</span><br />
                                <span>(typical sit-and-dine restaurants with wait staff)</span>
                            </label>
                            <FullServiceInput display={toggle} checked={checked.full} money={dining.full.parameters.money} setDining={setDining} />
                        </div>
                        <div>
                            <input type="checkbox" name="other" id="other-dining" checked={checked.other} onChange={handleCheckbox} />
                            <label htmlFor="other-dining">
                                <span>Other</span><br />
                                <span>(food and drinking places)</span>
                            </label>
                            <OtherInput display={toggle} checked={checked.other} money={dining.other.parameters.money} setDining={setDining} />
                        </div>
                    </div>
                </div>) 
                : null}
        </>
    );
}

export default Dining;