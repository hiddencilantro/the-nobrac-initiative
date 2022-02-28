function IntercityForm({display, checked, intercity, setIntercity}) {
    if (display === "true" && checked) {
        return (
            <form>
                <label htmlFor="intercity-miles-input">How much do you ride the intercity rail (Amtrak) per year?</label>
                <br />
                <input 
                    type="text" 
                    id="intercity-miles-input" 
                    placeholder="0"
                    value={intercity === 0 ? "" : intercity} 
                    onChange={e => isNaN(e.target.value) ? e.target.value="" : setIntercity(pS => ({...pS, parameters: {...pS.parameters, distance: parseInt(e.target.value)}}))} /> miles
            </form>
        );
    } else {
        return null;
    };
}

export default IntercityForm;