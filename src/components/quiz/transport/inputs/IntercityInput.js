function IntercityInput({display, checked, distance, setPublicTransit}) {
    if (display === "true" && checked) {
        return (
            <>
                <input 
                    type="number" 
                    id="intercity" 
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
                    }} />
                <span>miles per year</span>
            </>
        );
    } else {
        return null;
    };
}

export default IntercityInput;