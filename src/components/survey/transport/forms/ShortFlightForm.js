function ShortFlightForm({display, checked, shortFlight, setShortFlight}) {
    if (display === "true" && checked) {
        return (
            <form>
                <label htmlFor="short-flight-miles-input">How many approximate miles of short distance air travel do you do?</label>
                <br />
                <input 
                    type="number" 
                    id="short-flight-miles-input" 
                    placeholder="0"
                    value={(shortFlight === 0 || isNaN(shortFlight)) ? "" : shortFlight} 
                    onChange={e => setShortFlight(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.valueAsNumber}}))} /> miles
            </form>
        );
    } else {
        return null;
    };
}

export default ShortFlightForm;