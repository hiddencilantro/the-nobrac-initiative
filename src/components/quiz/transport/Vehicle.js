import { useEffect } from 'react';
import VehicleInput from './inputs/VehicleInput';

function Vehicle({setActiveStep, toggle, setToggle, vehicle, setVehicle}) {
    useEffect(() => {
        setActiveStep(0);
        setToggle(null);
    }, []);

    return (
        <div className='Vehicle'>
            <h3>Do you own a non-electric vehicle?</h3>
            <p>(car/minivan/SUV/small pickup truck)</p>
            <div onChange={e => setToggle(e.target.value)} >
                <input type="radio" name="vehicle" value={true} />
                <input type="radio" name="vehicle" value={false} />
            </div>
            <VehicleInput display={toggle} vehicle={vehicle} setVehicle={setVehicle} />
        </div>
    );
}

export default Vehicle;