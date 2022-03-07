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
                    min="0"
                    value={vehicle === 0 ? "" : Math.max(0, vehicle)} 
                    onChange={e => setVehicle(pS => ({...pS, parameters: {...pS.parameters, distance: Number(e.target.value)}}))} /> miles
            </div>
        );
    } else {
        return null;
    };
}

export default VehicleInput;