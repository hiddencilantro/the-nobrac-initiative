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
                    value={(distance === 0 || isNaN(distance)) ? "" : distance} 
                    onChange={e => {
                        setPublicTransit(pS => ({
                            ...pS, 
                            bus: {
                                ...pS.bus,
                                parameters: {
                                    ...pS.bus.parameters, 
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

export default BusInput;