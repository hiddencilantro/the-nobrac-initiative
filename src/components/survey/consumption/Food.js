import { useEffect } from 'react';
import ItemInput from './inputs/ItemInput';

function Food({setActiveStep, setToggle, checked, setChecked, foods, setFoods}) {    
    useEffect(() => {
        setActiveStep(6);
        setToggle(true);
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
                            {checked.hasOwnProperty('meat') ? 
                                (<div>
                                    <input type="checkbox" name="meat" checked={checked.meat} onChange={handleCheckbox} /> <label htmlFor='meat'>Meat</label><br />
                                    <input type="checkbox" name="poultry" checked={checked.poultry} onChange={handleCheckbox} /> <label htmlFor='poultry'>Poultry</label><br />
                                    <input type="checkbox" name="seafood" checked={checked.seafood} onChange={handleCheckbox} /> <label htmlFor='seafood'>Seafood</label><br />
                                    <input type="checkbox" name="bread" checked={checked.bread} onChange={handleCheckbox} /> <label htmlFor='bread'>Bread and other baked goods</label><br />
                                    <input type="checkbox" name="cereal" checked={checked.cereal} onChange={handleCheckbox} /> <label htmlFor='cereal'>Cereal</label><br />
                                    <input type="checkbox" name="cheese" checked={checked.cheese} onChange={handleCheckbox} /> <label htmlFor='cheese'>Cheese</label><br />
                                    <input type="checkbox" name="pasta" checked={checked.pasta} onChange={handleCheckbox} /> <label htmlFor='pasta'>Pasta/Tortillas</label><br />
                                    <input type="checkbox" name="milkAndButter" checked={checked.milkAndButter} onChange={handleCheckbox} /> <label htmlFor='milkAndButter'>Milk and Butter</label><br />
                                    <input type="checkbox" name="oils" checked={checked.oils} onChange={handleCheckbox} /> <label htmlFor='oils'>Vegetable/Olive/Seed Oils</label><br />
                                    <input type="checkbox" name="seasonings" checked={checked.seasonings} onChange={handleCheckbox} /> <label htmlFor='seasonings'>Seasonings and Dressings</label><br />
                                    <input type="checkbox" name="frozenFood" checked={checked.frozenFood} onChange={handleCheckbox} /> <label htmlFor='frozenFood'>Frozen Food</label><br />
                                    <input type="checkbox" name="iceCream" checked={checked.iceCream} onChange={handleCheckbox} /> <label htmlFor='iceCream'>Ice Cream and Frozen Desserts</label><br />
                                    <input type="checkbox" name="snacks" checked={checked.snacks} onChange={handleCheckbox} /> <label htmlFor='snacks'>Snacks</label><br />
                                    <input type="checkbox" name="other" checked={checked.other} onChange={handleCheckbox} /> <label htmlFor='other'>All Other</label><br />
                                </div>)
                                :null}
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