function IntercityInput({display, checked, distance, setPublicTransit}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="intercity-miles-input">How much do you ride the intercity rail (Amtrak) per year?</label>
                <br />
                <input 
                    type="number" 
                    id="intercity-miles-input" 
                    placeholder="0"
                    min="0"
                    value={distance === 0 ? "" : Math.max(0, distance)} 
                    onChange={e => {
                        setPublicTransit(pS => ({
                            ...pS, 
                            intercity: {
                                ...pS.intercity,
                                parameters: {
                                    ...pS.intercity.parameters, 
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

export default IntercityInput;