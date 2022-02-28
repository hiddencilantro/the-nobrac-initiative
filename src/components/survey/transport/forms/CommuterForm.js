function CommuterForm({display, checked, commuter, setCommuter}) {
    if (display === "true" && checked) {
        return (
            <form>
                <label htmlFor="commuter-miles-input">How much do you ride the commuter rail (train) per year?</label>
                <br />
                <input 
                    type="number" 
                    id="commuter-miles-input" 
                    placeholder="0"
                    value={(commuter === 0 || isNaN(commuter)) ? "" : commuter} 
                    onChange={e => setCommuter(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.valueAsNumber}}))} /> miles
            </form>
        );
    } else {
        return null;
    };
}

export default CommuterForm;