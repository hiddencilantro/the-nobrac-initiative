function CommuterForm({display, checked, commuter, setCommuter}) {
    if (display === "true" && checked) {
        return (
            <form>
                <label htmlFor="commuter-miles-input">How much do you ride the commuter rail (train) per year?</label>
                <br />
                <input 
                    type="text" 
                    id="commuter-miles-input" 
                    placeholder="0"
                    value={commuter === 0 ? "" : commuter} 
                    onChange={e => isNaN(e.target.value) ? e.target.value="" : setCommuter(pS => ({...pS, parameters: {...pS.parameters, distance: parseInt(e.target.value)}}))} /> miles
            </form>
        );
    } else {
        return null;
    };
}

export default CommuterForm;