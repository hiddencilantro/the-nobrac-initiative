function BusInput({display, checked, distance, setPublicTransit}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="bus-miles-input">How much do you ride the bus per year?</label>
                <br />
                <input 
                    type="number" 
                    id="bus-miles-input" 
                    placeholder="0"
                    min="0"
                    value={distance === 0 ? "" : Math.max(0, distance)} 
                    onChange={e => {
                        setPublicTransit(pS => ({
                            ...pS, 
                            bus: {
                                ...pS.bus,
                                parameters: {
                                    ...pS.bus.parameters, 
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

export default BusInput;