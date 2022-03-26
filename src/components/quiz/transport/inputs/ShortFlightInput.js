function ShortFlightInput({display, checked, distance, setFlight}) {
    if (display === "true" && checked) {
        return (
            <>
                <input 
                    type="number" 
                    id="short" 
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
                    }} />
                <span>miles per year</span>
            </>
        );
    } else {
        return null;
    };
}

export default ShortFlightInput;