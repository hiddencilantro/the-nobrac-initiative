function RapidInput({display, checked, rapid, setRapid}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="rapid-miles-input">How much do you ride rapid transit (subway/metro/tram) per year?</label>
                <br />
                <input 
                    type="number" 
                    id="rapid-miles-input" 
                    placeholder="0"
                    value={(rapid === 0 || isNaN(rapid)) ? "" : rapid} 
                    onChange={e => setRapid(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.valueAsNumber}}))} /> miles
            </div>
        );
    } else {
        return null;
    };
}

export default RapidInput;