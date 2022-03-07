function LongFlightInput({display, checked, distance, setFlight}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="long-flight-miles-input">How many total approximate miles of long distance flying do you do per year?</label>
                <br />
                <input 
                    type="number" 
                    id="long-flight-miles-input" 
                    placeholder="0"
                    min="0"
                    value={distance === 0 ? "" : Math.max(0, distance)} 
                    onChange={e => {
                        setFlight(pS => ({
                            ...pS, 
                            long: {
                                ...pS.long,
                                parameters: {
                                    ...pS.long.parameters, 
                                    distance: Number(e.target.value)
                                }
                            }
                        }));
                    }} /> miles
            </div>
        );
    } else {
        return null;
    };
}

export default LongFlightInput;