function ItemInput({checked, item, money, setState}) {
    if (checked) {
        return (
            <>
                $ <input 
                    id={item}
                    type="number" 
                    placeholder="0"
                    min="0"
                    value={money === 0 ? "" : Math.max(0, money)} 
                    onChange={e => {
                        setState(pS => ({
                            ...pS, 
                            [item]: {
                                ...pS[item], 
                                parameters: {
                                    ...pS[item].parameters, 
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

export default ItemInput;