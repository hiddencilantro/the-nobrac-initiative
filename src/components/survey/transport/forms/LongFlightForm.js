function LongFlightForm({display, checked, longFlight, setLongFlight}) {
    if (display === "true" && checked) {
        return (
            <form>
                <label htmlFor="long-flight-miles-input">How many approximate miles of long distance air travel do you do?</label>
                <br />
                <input 
                    type="text" 
                    id="long-flight-miles-input" 
                    placeholder="0"
                    value={longFlight === 0 ? "" : longFlight} 
                    onChange={e => isNaN(e.target.value) ? e.target.value="" : setLongFlight(pS => ({...pS, parameters: {...pS.parameters, distance: parseInt(e.target.value)}}))} /> miles
            </form>
        );
    } else {
        return null;
    };
}

export default LongFlightForm;