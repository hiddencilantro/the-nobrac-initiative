import { useEffect } from 'react';
import VehicleInput from './inputs/VehicleInput';

function Vehicle({setActiveStep, toggle, setToggle, vehicle, setVehicle}) {
    useEffect(() => {
        setActiveStep(0);
        setToggle(null);
    }, []);

    return (
        <>
            <p>Do you own a non-electric vehicle (car/minivan/SUV/small pickup truck)?</p>
            <div onChange={e => setToggle(e.target.value)} >
                <input type="radio" name="vehicle" value={true} /> Yes
                <input type="radio" name="vehicle" value={false} /> No
            </div>
            <br />
            <VehicleInput display={toggle} vehicle={vehicle} setVehicle={setVehicle} />
        </>
    );
}

export default Vehicle;