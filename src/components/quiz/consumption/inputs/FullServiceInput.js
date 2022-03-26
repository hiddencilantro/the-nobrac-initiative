function FullServiceInput({display, checked, money, setDining}) {
    if (display === "true" && checked) {
        return (
            <>
                $<input 
                    type="number" 
                    id="full" 
                    placeholder="0"
                    min="0"
                    value={money === 0 ? "" : Math.max(0, money)} 
                    onChange={e => {
                        setDining(pS => ({
                            ...pS, 
                            full: {
                                ...pS.full,
                                parameters: {
                                    ...pS.full.parameters, 
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

export default FullServiceInput;