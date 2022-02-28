function MediumFlightForm({display, checked, mediumFlight, setMediumFlight}) {
    if (display === "true" && checked) {
        return (
            <form>
                <label htmlFor="medium-flight-miles-input">How many approximate miles of medium distance air travel do you do?</label>
                <br />
                <input 
                    type="number" 
                    id="medium-flight-miles-input" 
                    placeholder="0"
                    value={(mediumFlight === 0 || isNaN(mediumFlight)) ? "" : mediumFlight} 
                    onChange={e => setMediumFlight(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.valueAsNumber}}))} /> miles
            </form>
        );
    } else {
        return null;
    };
}

export default MediumFlightForm;