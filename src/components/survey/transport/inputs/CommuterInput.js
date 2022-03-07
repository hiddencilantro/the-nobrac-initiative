function CommuterInput({display, checked, distance, setPublicTransit}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="commuter-miles-input">How much do you ride the commuter rail (train) per year?</label>
                <br />
                <input 
                    type="number" 
                    id="commuter-miles-input" 
                    placeholder="0"
                    min="0"
                    value={distance === 0 ? "" : Math.max(0, distance)} 
                    onChange={e => {
                        setPublicTransit(pS => ({
                            ...pS, 
                            commuter: {
                                ...pS.commuter,
                                parameters: {
                                    ...pS.commuter.parameters, 
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

export default CommuterInput;