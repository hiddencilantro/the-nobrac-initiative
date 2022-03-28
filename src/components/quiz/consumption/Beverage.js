import { useEffect } from 'react';
import ItemInput from './inputs/ItemInput';

function Beverage({setActiveStep, setToggle, checked, setChecked, beverages, setBeverages}) {
    useEffect(() => {
        setActiveStep(7);
        setToggle(true);
        setChecked({
            coffeeAndTea: false,
            softDrinksAndBottledWater: false,
            beer: false,
            spirits: false,
            wine: false
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

    const inputFields = Object.entries(beverages).map(([beverage, object]) => <ItemInput key={beverage} checked={checked[beverage]} item={beverage} money={object.parameters.money} setState={setBeverages} />)

    return (
        <>
            <h3>How much do you spend on beverages?</h3>
            {checked.hasOwnProperty('coffeeAndTea') ? 
                (<div className='checkbox-container'>
                    <div>
                        <input type="checkbox" name="coffeeAndTea" id="coffee-and-tea" checked={checked.coffeeAndTea} onChange={handleCheckbox} />
                        <label htmlFor="coffee-and-tea">
                            <span>Coffee/Tea</span>
                        </label>
                        {inputFields[0]}
                    </div>
                    <div>
                        <input type="checkbox" name="softDrinksAndBottledWater" id="drinks-and-water" checked={checked.softDrinksAndBottledWater} onChange={handleCheckbox} />
                        <label htmlFor="drinks-and-water">
                            <span>Soft Drinks/<br />Bottled Water</span>
                        </label>
                        {inputFields[1]}
                    </div>
                    <div>
                        <input type="checkbox" name="beer" id="beer" checked={checked.beer} onChange={handleCheckbox} />
                        <label htmlFor="beer">
                            <span>Beer</span>
                        </label>
                        {inputFields[2]}
                    </div>
                    <div>
                        <input type="checkbox" name="spirits" id="spirits" checked={checked.spirits} onChange={handleCheckbox} />
                        <label htmlFor="spirits">
                            <span>Spirits</span>
                        </label>
                        {inputFields[3]}
                    </div>
                    <div>
                        <input type="checkbox" name="wine" id="wine" checked={checked.wine} onChange={handleCheckbox} />
                        <label htmlFor="wine">
                            <span>Wine</span>
                        </label>
                        {inputFields[4]}
                    </div>
                </div>)
                : null}
        </>
    );
}

export default Beverage;