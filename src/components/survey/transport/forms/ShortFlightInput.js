function ShortFlightInput({display, checked, shortFlight, setShortFlight}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="short-flight-miles-input">How many total approximate miles of short distance flying do you do?</label>
                <br />
                <input 
                    type="number" 
                    id="short-flight-miles-input" 
                    placeholder="0"
                    value={(shortFlight === 0 || isNaN(shortFlight)) ? "" : shortFlight} 
                    onChange={e => setShortFlight(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.valueAsNumber}}))} /> miles
            </div>
        );
    } else {
        return null;
    };
}

export default ShortFlightInput;