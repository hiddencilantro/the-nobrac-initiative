function LongFlightInput({display, checked, longFlight, setLongFlight}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="long-flight-miles-input">How many total approximate miles of long distance flying do you do?</label>
                <br />
                <input 
                    type="number" 
                    id="long-flight-miles-input" 
                    placeholder="0"
                    value={(longFlight === 0 || isNaN(longFlight)) ? "" : longFlight} 
                    onChange={e => setLongFlight(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.valueAsNumber}}))} /> miles
            </div>
        );
    } else {
        return null;
    };
}

export default LongFlightInput;