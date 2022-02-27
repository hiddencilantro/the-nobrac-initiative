function BusForm({display, checked, bus, setBus}) {
    if (display === "true" && checked) {
        return (
            <form>
                <label htmlFor="bus-miles-input">How much do you ride the bus per year?</label>
                <br />
                <input 
                    type="text" 
                    id="bus-miles-input" 
                    placeholder="0"
                    value={bus === 0 ? null : bus} 
                    onChange={e => isNaN(e.target.value) ? e.target.value="" : setBus(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.value}}))} /> miles
            </form>
        );
    } else {
        return null;
    };
}

export default BusForm;