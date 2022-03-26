import { useEffect } from 'react';
import ItemInput from '../consumption/inputs/ItemInput';

function Services({setActiveStep, setToggle, checked, setChecked, services, setServices}) {
    useEffect(() => {
        setActiveStep(11);
        setToggle(true);
        setChecked({
            dryCleaning: false,
            subscriptions: false,
            vehicleRepair: false,
            otherServices: false
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

    const inputFields = Object.entries(services).map(([service, object]) => <ItemInput key={service} checked={checked[service]} item={service} money={object.parameters.money} setState={setServices} />)

    return (
        <>
            <h3>How much do you spend on any of the following services?</h3>
            {checked.hasOwnProperty('dryCleaning') ? 
                (<div className='checkbox-container'>
                    <div>
                        <input type="checkbox" name="dryCleaning" id="dryCleaning" checked={checked.dryCleaning} onChange={handleCheckbox} />
                        <label htmlFor="dryCleaning">
                            <span>Dry Cleaning/Laundry</span>
                        </label>
                        {inputFields[0]}
                    </div>
                    <div>
                        <input type="checkbox" name="subscriptions" id="subscriptions" checked={checked.subscriptions} onChange={handleCheckbox} />
                        <label htmlFor="subscriptions">
                            <span>Cable/Subscriptions</span>
                        </label>
                        {inputFields[1]}
                    </div>
                    <div>
                        <input type="checkbox" name="vehicleRepair" id="vehicleRepair" checked={checked.vehicleRepair} onChange={handleCheckbox} />
                        <label htmlFor="vehicleRepair">
                            <span>Vehicle Repair</span>
                        </label>
                        {inputFields[2]}
                    </div>
                    <div>
                        <input type="checkbox" name="otherServices" id="otherServices" checked={checked.otherServices} onChange={handleCheckbox} />
                        <label htmlFor="otherServices">
                            <span>Other Services</span><br />
                            <span>(pet care, parking)</span>
                        </label>
                        {inputFields[3]}
                    </div>
                </div>)
                : null}
        </>
    );
}

export default Services;