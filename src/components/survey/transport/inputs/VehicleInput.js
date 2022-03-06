function VehicleInput({display, vehicle, setVehicle}) {
    if (display === "true") {
        return (
            <div>
                <label htmlFor="vehicle-miles-input">How many miles do you drive per year?</label>
                <br />
                <input 
                    type="number" 
                    id="vehicle-miles-input" 
                    placeholder="0"
                    value={(vehicle === 0 || isNaN(vehicle)) ? "" : vehicle} 
                    onChange={e => setVehicle(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.valueAsNumber}}))} /> miles
            </div>
        );
    } else {
        return null;
    };
}

export default VehicleInput;