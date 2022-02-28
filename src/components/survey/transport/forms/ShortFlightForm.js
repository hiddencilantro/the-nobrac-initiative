function ShortFlightForm({display, checked, shortFlight, setShortFlight}) {
    if (display === "true" && checked) {
        return (
            <form>
                <label htmlFor="short-flight-miles-input">How many approximate miles of short distance air travel do you do?</label>
                <br />
                <input 
                    type="text" 
                    id="short-flight-miles-input" 
                    placeholder="0"
                    value={shortFlight === 0 ? "" : shortFlight} 
                    onChange={e => isNaN(e.target.value) ? e.target.value="" : setShortFlight(pS => ({...pS, parameters: {...pS.parameters, distance: parseInt(e.target.value)}}))} /> miles
            </form>
        );
    } else {
        return null;
    };
}

export default ShortFlightForm;