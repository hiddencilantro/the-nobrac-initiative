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
                    value={(distance === 0 || isNaN(distance)) ? "" : distance} 
                    onChange={e => {
                        setFlight(pS => ({
                            ...pS, 
                            short: {
                                ...pS.short,
                                parameters: {
                                    ...pS.short.parameters, 
                                    distance: e.target.valueAsNumber
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