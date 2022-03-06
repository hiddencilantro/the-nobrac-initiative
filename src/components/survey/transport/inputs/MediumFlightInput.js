function MediumFlightInput({display, checked, distance, setFlight}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="medium-flight-miles-input">How many total approximate miles of medium distance flying do you do?</label>
                <br />
                <input 
                    type="number" 
                    id="medium-flight-miles-input" 
                    placeholder="0"
                    value={(distance === 0 || isNaN(distance)) ? "" : distance} 
                    onChange={e => {
                        setFlight(pS => ({
                            ...pS, 
                            medium: {
                                ...pS.medium,
                                parameters: {
                                    ...pS.medium.parameters, 
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

export default MediumFlightInput;