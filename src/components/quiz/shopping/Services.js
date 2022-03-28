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
        if(e.target.parentElement.style.backgroundColor === "") {
            e.target.parentElement.style.backgroundColor = "rgb(216, 226, 224)";
        } else {
            e.target.parentElement.style.backgroundColor = "";
        };
    };

    const inputFields = Object.entries(services).map(([service, object]) => <ItemInput key={service} checked={checked[service]} item={service} money={object.parameters.money} setState={setServices} />)

    return (
        <>
            <h3>How much do you spend on any of the following services?</h3>
            {checked.hasOwnProperty('dryCleaning') ? 
                (<div className='checkbox-container'>
                    <div>
                        <input type="checkbox" name="dryCleaning" id="laundry" checked={checked.dryCleaning} onChange={handleCheckbox} />
                        <label htmlFor="laundry">
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
                        <input type="checkbox" name="vehicleRepair" id="vehicle-repair" checked={checked.vehicleRepair} onChange={handleCheckbox} />
                        <label htmlFor="vehicle-repair">
                            <span>Vehicle Repair</span>
                        </label>
                        {inputFields[2]}
                    </div>
                    <div>
                        <input type="checkbox" name="otherServices" id="other-services" checked={checked.otherServices} onChange={handleCheckbox} />
                        <label htmlFor="other-services">
                            <span>Other Services</span><br />
                            <span>(Pet Care/Parking)</span>
                        </label>
                        {inputFields[3]}
                    </div>
                </div>)
                : null}
        </>
    );
}

export default Services;