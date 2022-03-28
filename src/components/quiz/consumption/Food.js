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
        if(e.target.parentElement.style.backgroundColor === "") {
            e.target.parentElement.style.backgroundColor = "rgb(216, 226, 224)";
        } else {
            e.target.parentElement.style.backgroundColor = "";
        };
    };

    const inputFields = Object.entries(foods).map(([food, object]) => <ItemInput key={food} checked={checked[food]} item={food} money={object.parameters.money} setState={setFoods} />)

    return (
        <>
            <h3>How much food do you consume at home?</h3>
            {checked.hasOwnProperty('meat') ? 
                (<div className='checkbox-container'>
                    <div>
                        <input type="checkbox" name="meat" id="meat" checked={checked.meat} onChange={handleCheckbox} />
                        <label htmlFor="meat">
                            <span>Meat</span>
                        </label>
                        {inputFields[0]}
                    </div>
                    <div>
                        <input type="checkbox" name="poultry" id="poultry" checked={checked.poultry} onChange={handleCheckbox} />
                        <label htmlFor="poultry">
                            <span>Poultry</span>
                        </label>
                        {inputFields[1]}
                    </div>
                    <div>
                        <input type="checkbox" name="seafood" id="seafood" checked={checked.seafood} onChange={handleCheckbox} />
                        <label htmlFor="seafood">
                            <span>Seafood</span>
                        </label>
                        {inputFields[2]}
                    </div>
                    <div>
                        <input type="checkbox" name="bread" id="bread" checked={checked.bread} onChange={handleCheckbox} />
                        <label htmlFor="bread">
                            <span>Bread</span><br />
                            <span>(Baked Goods)</span>
                        </label>
                        {inputFields[3]}
                    </div>
                    <div>
                        <input type="checkbox" name="cereal" id="cereal" checked={checked.cereal} onChange={handleCheckbox} />
                        <label htmlFor="cereal">
                            <span>Cereal</span>
                        </label>
                        {inputFields[4]}
                    </div>
                    <div>
                        <input type="checkbox" name="cheese" id="cheese" checked={checked.cheese} onChange={handleCheckbox} />
                        <label htmlFor="cheese">
                            <span>Cheese</span>
                        </label>
                        {inputFields[5]}
                    </div>
                    <div>
                        <input type="checkbox" name="pasta" id="pasta" checked={checked.pasta} onChange={handleCheckbox} />
                        <label htmlFor="pasta">
                            <span>Pasta/Tortillas</span>
                        </label>
                        {inputFields[6]}
                    </div>
                    <div>
                        <input type="checkbox" name="milkAndButter" id="milk" checked={checked.milkAndButter} onChange={handleCheckbox} />
                        <label htmlFor="milk">
                            <span>Milk/Butter</span>
                        </label>
                        {inputFields[7]}
                    </div>
                    <div>
                        <input type="checkbox" name="oils" id="oils" checked={checked.oils} onChange={handleCheckbox} />
                        <label htmlFor="oils">
                            <span>Oils</span><br />
                            <span>(Vegetable/Olive/Seed)</span>
                        </label>
                        {inputFields[8]}
                    </div>
                    <div>
                        <input type="checkbox" name="seasonings" id="seasonings" checked={checked.seasonings} onChange={handleCheckbox} />
                        <label htmlFor="seasonings">
                            <span>Seasonings/Dressings</span>
                        </label>
                        {inputFields[9]}
                    </div>
                    <div>
                        <input type="checkbox" name="frozenFood" id="frozen-food" checked={checked.frozenFood} onChange={handleCheckbox} />
                        <label htmlFor="frozen-food">
                            <span>Frozen Food</span>
                        </label>
                        {inputFields[10]}
                    </div>
                    <div>
                        <input type="checkbox" name="iceCream" id="ice-cream" checked={checked.iceCream} onChange={handleCheckbox} />
                        <label htmlFor="ice-cream">
                            <span>Ice Cream</span><br />
                            <span>(Frozen Desserts)</span>
                        </label>
                        {inputFields[11]}
                    </div>
                    <div>
                        <input type="checkbox" name="snacks" id="snacks" checked={checked.snacks} onChange={handleCheckbox} />
                        <label htmlFor="snacks">
                            <span>Snacks</span>
                        </label>
                        {inputFields[12]}
                    </div>
                    <div>
                        <input type="checkbox" name="other" id="other-food" checked={checked.other} onChange={handleCheckbox} />
                        <label htmlFor="other-food">
                            <span>All Other</span>
                        </label>
                        {inputFields[13]}
                    </div>
                </div>)
                : null}
        </>
    );
}

export default Food;