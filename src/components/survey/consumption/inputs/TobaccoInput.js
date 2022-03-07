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
                    min="0"
                    value={tobacco === 0 ? "" : Math.max(0, tobacco)} 
                    onChange={e => setTobacco(pS => ({...pS, parameters: {...pS.parameters, money: Number(e.target.value)}}))} /> per month
            </div>
        );
    } else {
        return null;
    };
}

export default TobaccoInput;