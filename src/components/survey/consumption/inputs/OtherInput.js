function OtherServiceInput({display, checked, money, setDining}) {
    if (display === "true" && checked) {
        return (
            <div>
                <label htmlFor="other-service-money-input">How much do you spend at all other types of food and drinking establishments?</label>
                <br />
                $<input 
                    type="number" 
                    id="other-service-money-input" 
                    placeholder="0"
                    min="0"
                    value={money === 0 ? "" : Math.max(0, money)} 
                    onChange={e => {
                        setDining(pS => ({
                            ...pS, 
                            other: {
                                ...pS.other,
                                parameters: {
                                    ...pS.other.parameters, 
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

export default OtherServiceInput;