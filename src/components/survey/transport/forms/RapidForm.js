function RapidForm({display, checked, rapid, setRapid}) {
    if (display === "true" && checked) {
        return (
            <form>
                <label htmlFor="rapid-miles-input">How much do you ride rapid transit (subway/metro/tram) per year?</label>
                <br />
                <input 
                    type="text" 
                    id="rapid-miles-input" 
                    placeholder="0"
                    value={rapid === 0 ? null : rapid} 
                    onChange={e => isNaN(e.target.value) ? e.target.value="" : setRapid(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.value}}))} /> miles
            </form>
        );
    } else {
        return null;
    };
}

export default RapidForm;