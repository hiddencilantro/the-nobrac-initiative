function FoodInput({checked, food, money, setFoods}) {
    if (checked) {
        return (
            <div>
                <label htmlFor={food}>{food.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}: $</label>
                <input 
                    id={food}
                    type="number" 
                    placeholder="0"
                    value={(money === 0 || isNaN(money)) ? "" : money} 
                    onChange={e => {
                        setFoods(pS => ({
                            ...pS, 
                            [food]: {
                                ...pS[food], 
                                parameters: {
                                    ...pS[food].parameters, 
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

export default FoodInput;