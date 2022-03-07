function ShortFlightInput({display, checked, distance, setFlight}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="short-flight-miles-input">How many total approximate miles of short distance flying do you do?</label>
                <br />
                <input 
                    type="number" 
                    id="short-flight-miles-input" 
                    placeholder="0"
                    min="0"
                    value={distance === 0 ? "" : Math.max(0, distance)} 
                    onChange={e => {
                        setFlight(pS => ({
                            ...pS, 
                            short: {
                                ...pS.short,
                                parameters: {
                                    ...pS.short.parameters, 
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

export default ShortFlightInput;