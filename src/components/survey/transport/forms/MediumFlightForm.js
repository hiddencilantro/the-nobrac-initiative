function MediumFlightForm({display, checked, mediumFlight, setMediumFlight}) {
    if (display === "true" && checked) {
        return (
            <form>
                <label htmlFor="medium-flight-miles-input">How many approximate miles of medium distance air travel do you do?</label>
                <br />
                <input 
                    type="text" 
                    id="medium-flight-miles-input" 
                    placeholder="0"
                    value={mediumFlight === 0 ? "" : mediumFlight} 
                    onChange={e => isNaN(e.target.value) ? e.target.value="" : setMediumFlight(pS => ({...pS, parameters: {...pS.parameters, distance: parseInt(e.target.value)}}))} /> miles
            </form>
        );
    } else {
        return null;
    };
}

export default MediumFlightForm;