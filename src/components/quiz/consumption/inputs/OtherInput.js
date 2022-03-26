function OtherServiceInput({display, checked, money, setDining}) {
    if (display === "true" && checked) {
        return (
            <>
                $ <input 
                    type="number" 
                    id="other" 
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
                    }} />
                <span>per month</span>
            </>
        );
    } else {
        return null;
    };
}

export default OtherServiceInput;