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
    };

    const inputFields = Object.entries(services).map(([service, object]) => <ItemInput key={service} checked={checked[service]} item={service} money={object.parameters.money} setState={setServices} />)

    return (
        <>
            <p>How much do you spend on any of the following services?</p>
            <table style={{width: '60%', marginLeft: '20%', marginRight: '20%'}}>
                <tbody>
                    <tr>
                        <td style={{width: '50%'}}>
                            {checked.hasOwnProperty('dryCleaning') ? 
                                (<div>
                                    <input type="checkbox" name="dryCleaning" checked={checked.dryCleaning} onChange={handleCheckbox} /> <label htmlFor='dryCleaning'>Dry Cleaning/Laundry</label><br />
                                    <input type="checkbox" name="subscriptions" checked={checked.subscriptions} onChange={handleCheckbox} /> <label htmlFor='subscriptions'>Cable/Subscriptions</label><br />
                                    <input type="checkbox" name="vehicleRepair" checked={checked.vehicleRepair} onChange={handleCheckbox} /> <label htmlFor='vehicleRepair'>Vehicle Repair</label><br />
                                    <input type="checkbox" name="otherServices" checked={checked.otherServices} onChange={handleCheckbox} /> <label htmlFor='otherServices'>Other Services (i.e. pet care, parking)</label><br />
                                </div>)
                                : null}
                        </td>
                        <td style={{width: '50%', verticalAlign: 'top'}}>
                            {inputFields}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Services;