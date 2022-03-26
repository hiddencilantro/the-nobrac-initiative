import { useEffect } from 'react';
import ItemInput from '../consumption/inputs/ItemInput';

function Goods({setActiveStep, setToggle, checked, setChecked, goods, setGoods}) {
    useEffect(() => {
        setActiveStep(10);
        setToggle(true);
        setChecked({
            clothing: false,
            booksAndOtherPrint: false,
            toysAndGames: false,
            sportingGoods: false,
            dogAndCatFood: false,
            health: false,
            generalMerchandise: false,
            nonstoreRetailers: false,
            otherRetail: false
        });
    }, []);

    const handleCheckbox = e => {
        setChecked(pS => ({...pS, [e.target.name]: e.target.checked}));
        if(e.target.parentElement.style.backgroundColor === "rgb(216, 226, 224)") {
            e.target.parentElement.style.backgroundColor = "rgb(241, 245, 245)";
        } else {
            e.target.parentElement.style.backgroundColor = "rgb(216, 226, 224)";
        };
    };

    const inputFields = Object.entries(goods).map(([good, object]) => <ItemInput key={good} checked={checked[good]} item={good} money={object.parameters.money} setState={setGoods} />)

    return (
        <>
            <h3>How much do you spend on any of the following goods?</h3>
            {checked.hasOwnProperty('clothing') ? 
                (<div className='checkbox-container'>
                    <div>
                        <input type="checkbox" name="clothing" id="clothing" checked={checked.clothing} onChange={handleCheckbox} />
                        <label htmlFor="clothing">
                            <span>Clothing</span>
                        </label>
                        {inputFields[0]}
                    </div>
                    <div>
                        <input type="checkbox" name="booksAndOtherPrint" id="booksAndOtherPrint" checked={checked.booksAndOtherPrint} onChange={handleCheckbox} />
                        <label htmlFor="booksAndOtherPrint">
                            <span>Books/Newspapers/ Magazines</span>
                        </label>
                        {inputFields[1]}
                    </div>
                    <div>
                        <input type="checkbox" name="toysAndGames" id="toysAndGames" checked={checked.toysAndGames} onChange={handleCheckbox} />
                        <label htmlFor="toysAndGames">
                            <span>Toys/Games</span>
                        </label>
                        {inputFields[2]}
                    </div>
                    <div>
                        <input type="checkbox" name="sportingGoods" id="sportingGoods" checked={checked.sportingGoods} onChange={handleCheckbox} />
                        <label htmlFor="sportingGoods">
                            <span>Sporting/Athletic Goods</span>
                        </label>
                        {inputFields[3]}
                    </div>
                    <div>
                        <input type="checkbox" name="dogAndCatFood" id="dogAndCatFood" checked={checked.dogAndCatFood} onChange={handleCheckbox} />
                        <label htmlFor="dogAndCatFood">
                            <span>Dog/Cat Food</span>
                        </label>
                        {inputFields[4]}
                    </div>
                    <div>
                        <input type="checkbox" name="health" id="health" checked={checked.health} onChange={handleCheckbox} />
                        <label htmlFor="health">
                            <span>Health/Personal Care</span>
                        </label>
                        {inputFields[5]}
                    </div>
                    <div>
                        <input type="checkbox" name="generalMerchandise" id="generalMerchandise" checked={checked.generalMerchandise} onChange={handleCheckbox} />
                        <label htmlFor="generalMerchandise">
                            <span>General Merchandise</span>
                        </label>
                        {inputFields[6]}
                    </div>
                    <div>
                        <input type="checkbox" name="nonstoreRetailers" id="nonstoreRetailers" checked={checked.nonstoreRetailers} onChange={handleCheckbox} />
                        <label htmlFor="nonstoreRetailers">
                            <span>Nonstore Retailers</span><br />
                            <span>(e-commerce, street vendors)</span>
                        </label>
                        {inputFields[7]}
                    </div>
                    <div>
                        <input type="checkbox" name="otherRetail" id="otherRetail" checked={checked.otherRetail} onChange={handleCheckbox} />
                        <label htmlFor="otherRetail">
                            <span>All Other Retail</span>
                        </label>
                        {inputFields[8]}
                    </div>
                </div>)
                : null}
        </>
    );
}

export default Goods;