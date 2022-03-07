function MediumFlightInput({display, checked, distance, setFlight}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="medium-flight-miles-input">How many total approximate miles of medium distance flying do you do per year?</label>
                <br />
                <input 
                    type="number" 
                    id="medium-flight-miles-input" 
                    placeholder="0"
                    min="0"
                    value={distance === 0 ? "" : Math.max(0, distance)} 
                    onChange={e => {
                        setFlight(pS => ({
                            ...pS, 
                            medium: {
                                ...pS.medium,
                                parameters: {
                                    ...pS.medium.parameters, 
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

export default MediumFlightInput;