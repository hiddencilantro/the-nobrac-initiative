import { useEffect } from 'react';
import ItemInput from './inputs/ItemInput';

function Food({setActiveStep, checked, setChecked, foods, setFoods}) {    
    useEffect(() => {
        setActiveStep(6);
        setChecked({
            meat: false,
            poultry: false,
            seafood: false,
            bread: false,
            cereal: false,
            cheese: false,
            pasta: false,
            milkAndButter: false,
            oils: false,
            seasonings: false,
            frozenFood: false,
            iceCream: false,
            snacks: false,
            other: false
        });
    }, []);

    const handleCheckbox = e => {
        setChecked(pS => ({...pS, [e.target.name]: e.target.checked}));
    };

    const inputFields = Object.entries(foods).map(([food, object]) => <ItemInput key={food} checked={checked[food]} item={food} money={object.parameters.money} setState={setFoods} />)

    return (
        <>
            <p>How much food do you consume at home?</p>
            <table style={{width: '60%', marginLeft: '20%', marginRight: '20%'}}>
                <tbody>
                    <tr>
                        <td style={{width: '50%'}}>
                            <div>
                                <input type="checkbox" name="meat" onChange={handleCheckbox} /> <label htmlFor='meat'>Meat</label><br />
                                <input type="checkbox" name="poultry" onChange={handleCheckbox} /> <label htmlFor='poultry'>Poultry</label><br />
                                <input type="checkbox" name="seafood" onChange={handleCheckbox} /> <label htmlFor='seafood'>Seafood</label><br />
                                <input type="checkbox" name="bread" onChange={handleCheckbox} /> <label htmlFor='bread'>Bread and other baked goods</label><br />
                                <input type="checkbox" name="cereal" onChange={handleCheckbox} /> <label htmlFor='cereal'>Cereal</label><br />
                                <input type="checkbox" name="cheese" onChange={handleCheckbox} /> <label htmlFor='cheese'>Cheese</label><br />
                                <input type="checkbox" name="pasta" onChange={handleCheckbox} /> <label htmlFor='pasta'>Pasta/Tortillas</label><br />
                                <input type="checkbox" name="milkAndButter" onChange={handleCheckbox} /> <label htmlFor='milkAndButter'>Milk and Butter</label><br />
                                <input type="checkbox" name="oils" onChange={handleCheckbox} /> <label htmlFor='oils'>Vegetable/Olive/Seed Oils</label><br />
                                <input type="checkbox" name="seasonings" onChange={handleCheckbox} /> <label htmlFor='seasonings'>Seasonings and Dressings</label><br />
                                <input type="checkbox" name="frozenFood" onChange={handleCheckbox} /> <label htmlFor='frozenFood'>Frozen Food</label><br />
                                <input type="checkbox" name="iceCream" onChange={handleCheckbox} /> <label htmlFor='iceCream'>Ice Cream and Frozen Desserts</label><br />
                                <input type="checkbox" name="snacks" onChange={handleCheckbox} /> <label htmlFor='snacks'>Snacks</label><br />
                                <input type="checkbox" name="other" onChange={handleCheckbox} /> <label htmlFor='other'>All Other</label><br />
                            </div>
                        </td>
                        <td style={{width: '50%', verticalAlign: 'top'}}>
                            {inputFields}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Food;