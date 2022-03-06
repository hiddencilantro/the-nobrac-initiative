function ItemInput({checked, item, money, setState}) {
    if (checked) {
        return (
            <div>
                <label htmlFor={item}>{item.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}: $</label>
                <input 
                    id={item}
                    type="number" 
                    placeholder="0"
                    value={(money === 0 || isNaN(money)) ? "" : money} 
                    onChange={e => {
                        setState(pS => ({
                            ...pS, 
                            [item]: {
                                ...pS[item], 
                                parameters: {
                                    ...pS[item].parameters, 
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

export default ItemInput;