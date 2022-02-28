function BusForm({display, checked, bus, setBus}) {
    if (display === "true" && checked) {
        return (
            <form>
                <label htmlFor="bus-miles-input">How much do you ride the bus per year?</label>
                <br />
                <input 
                    type="number" 
                    id="bus-miles-input" 
                    placeholder="0"
                    value={(bus === 0 || isNaN(bus)) ? "" : bus} 
                    onChange={e => setBus(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.valueAsNumber}}))} /> miles
            </form>
        );
    } else {
        return null;
    };
}

export default BusForm;