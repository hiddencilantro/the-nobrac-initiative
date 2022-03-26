function RapidInput({display, checked, distance, setPublicTransit}) {
    if (display === "true" && checked) {
        return (
            <>
                <input 
                    type="number" 
                    id="rapid" 
                    placeholder="0"
                    min="0"
                    value={distance === 0 ? "" : Math.max(0, distance)} 
                    onChange={e => {
                        setPublicTransit(pS => ({
                            ...pS, 
                            rapid: {
                                ...pS.rapid,
                                parameters: {
                                    ...pS.rapid.parameters, 
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

export default RapidInput;