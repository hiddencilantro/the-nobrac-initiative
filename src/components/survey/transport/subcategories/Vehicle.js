import { useState } from "react";
import VehicleForm from '../forms/VehicleForm';

function Vehicle({vehicle, setVehicle}) {
    const [toggle, setToggle] = useState(null);

    return (
        <>
            <p>Do you own a non-electric vehicle (car/minivan/SUV/small pickup truck)?</p>
            <div onChange={e => setToggle(e.target.value)} >
                <input type="radio" name="vehicle" value={true} /> Yes
                <input type="radio" name="vehicle" value={false} /> No
            </div>
            <br />
            <VehicleForm display={toggle} vehicle={vehicle} setVehicle={setVehicle} />
        </>
    );
}

export default Vehicle;