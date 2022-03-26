function MediumFlightInput({display, checked, distance, setFlight}) {
    if (display === "true" && checked) {
        return (
            <>
                <input 
                    type="number" 
                    id="medium" 
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
                    }} />
                <span>miles per year</span>
            </>
        );
    } else {
        return null;
    };
}

export default MediumFlightInput;