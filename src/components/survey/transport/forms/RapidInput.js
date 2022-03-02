function RapidInput({display, checked, distance, setPublicTransit}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="rapid-miles-input">How much do you ride rapid transit (subway/metro/tram) per year?</label>
                <br />
                <input 
                    type="number" 
                    id="rapid-miles-input" 
                    placeholder="0"
                    value={(distance === 0 || isNaN(distance)) ? "" : distance} 
                    onChange={e => {
                        setPublicTransit(pS => (
                            {...pS, 
                            rapid: {
                                ...pS.rapid,
                                parameters: {
                                    ...pS.rapid.parameters, 
                                    distance: e.target.valueAsNumber
                                    }
                                }
                            }
                        ));
                    }} /> miles
            </div>
        );
    } else {
        return null;
    };
}

export default RapidInput;