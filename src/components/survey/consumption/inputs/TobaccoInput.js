function TobaccoInput({display, tobacco, setTobacco}) {
    if (display === "true") {
        return (
            <div>
                <label htmlFor="tobacco-money-input">How much do you approximately spend on cigarettes?</label>
                <br />
                $<input 
                    type="number" 
                    id="tobacco-money-input" 
                    placeholder="0"
                    value={(tobacco === 0 || isNaN(tobacco)) ? "" : tobacco} 
                    onChange={e => setTobacco(pS => ({...pS, parameters: {...pS.parameters, money: e.target.valueAsNumber}}))} /> per month
            </div>
        );
    } else {
        return null;
    };
}

export default TobaccoInput;