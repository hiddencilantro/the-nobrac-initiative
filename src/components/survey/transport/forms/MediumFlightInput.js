function MediumFlightInput({display, checked, mediumFlight, setMediumFlight}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="medium-flight-miles-input">How many total approximate miles of medium distance flying do you do?</label>
                <br />
                <input 
                    type="number" 
                    id="medium-flight-miles-input" 
                    placeholder="0"
                    value={(mediumFlight === 0 || isNaN(mediumFlight)) ? "" : mediumFlight} 
                    onChange={e => setMediumFlight(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.valueAsNumber}}))} /> miles
            </div>
        );
    } else {
        return null;
    };
}

export default MediumFlightInput;