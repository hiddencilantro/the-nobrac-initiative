function IntercityForm({display, checked, intercity, setIntercity}) {
    if (display === "true" && checked) {
        return (
            <form>
                <label htmlFor="intercity-miles-input">How much do you ride the intercity rail (Amtrak) per year?</label>
                <br />
                <input 
                    type="number" 
                    id="intercity-miles-input" 
                    placeholder="0"
                    value={(intercity === 0 || isNaN(intercity)) ? "" : intercity} 
                    onChange={e => setIntercity(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.valueAsNumber}}))} /> miles
            </form>
        );
    } else {
        return null;
    };
}

export default IntercityForm;