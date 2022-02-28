function LongFlightForm({display, checked, longFlight, setLongFlight}) {
    if (display === "true" && checked) {
        return (
            <form>
                <label htmlFor="long-flight-miles-input">How many approximate miles of long distance air travel do you do?</label>
                <br />
                <input 
                    type="number" 
                    id="long-flight-miles-input" 
                    placeholder="0"
                    value={(longFlight === 0 || isNaN(longFlight)) ? "" : longFlight} 
                    onChange={e => setLongFlight(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.valueAsNumber}}))} /> miles
            </form>
        );
    } else {
        return null;
    };
}

export default LongFlightForm;