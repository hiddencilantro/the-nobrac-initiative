function LongFlightInput({display, checked, distance, setFlight}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="long-flight-miles-input">How many total approximate miles of long distance flying do you do?</label>
                <br />
                <input 
                    type="number" 
                    id="long-flight-miles-input" 
                    placeholder="0"
                    value={(distance === 0 || isNaN(distance)) ? "" : distance} 
                    onChange={e => {
                        setFlight(pS => ({
                            ...pS, 
                            long: {
                                ...pS.long,
                                parameters: {
                                    ...pS.long.parameters, 
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

export default LongFlightInput;