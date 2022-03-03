function FullServiceInput({display, checked, money, setDining}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="full-service-money-input">How much do you spend at full-service restaurants?</label>
                <br />
                $<input 
                    type="number" 
                    id="full-service-money-input" 
                    placeholder="0"
                    value={(money === 0 || isNaN(money)) ? "" : money} 
                    onChange={e => {
                        setDining(pS => ({
                            ...pS, 
                            full: {
                                ...pS.full,
                                parameters: {
                                    ...pS.full.parameters, 
                                    money: e.target.valueAsNumber
                                }
                            }
                        }));
                    }} /> per month
            </div>
        );
    } else {
        return null;
    };
}

export default FullServiceInput;