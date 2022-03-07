function LimitedServiceInput({display, checked, money, setDining}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="limited-service-money-input">How much do you spend at limited-service restaurants?</label>
                <br />
                $<input 
                    type="number" 
                    id="limited-service-money-input" 
                    placeholder="0"
                    min="0"
                    value={money === 0 ? "" : Math.max(0, money)} 
                    onChange={e => {
                        setDining(pS => ({
                            ...pS, 
                            limited: {
                                ...pS.limited,
                                parameters: {
                                    ...pS.limited.parameters, 
                                    money: Number(e.target.value)
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

export default LimitedServiceInput;