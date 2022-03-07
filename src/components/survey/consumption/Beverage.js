import { useEffect } from 'react';
import ItemInput from './inputs/ItemInput';

function Beverage({setActiveStep, checked, setChecked, beverages, setBeverages}) {
    useEffect(() => {
        setActiveStep(7);
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
    };

    const inputFields = Object.entries(beverages).map(([beverage, object]) => <ItemInput key={beverage} checked={checked[beverage]} item={beverage} money={object.parameters.money} setState={setBeverages} />)

    return (
        <>
            <p>How much do you spend on beverages?</p>
            <table style={{width: '60%', marginLeft: '20%', marginRight: '20%'}}>
                <tbody>
                    <tr>
                        <td style={{width: '45%'}}>
                            {checked.hasOwnProperty('coffeeAndTea') ? 
                                (<div>
                                    <input type="checkbox" name="coffeeAndTea" checked={checked.coffeeAndTea} onChange={handleCheckbox} /> <label htmlFor='coffeeAndTea'>Coffee And Tea</label><br />
                                    <input type="checkbox" name="softDrinksAndBottledWater" checked={checked.softDrinksAndBottledWater} onChange={handleCheckbox} /> <label htmlFor='softDrinksAndBottledWater'>Soft Drinks and Bottled Water</label><br />
                                    <input type="checkbox" name="beer" checked={checked.beer} onChange={handleCheckbox} /> <label htmlFor='beer'>Beer</label><br />
                                    <input type="checkbox" name="spirits" checked={checked.spirits} onChange={handleCheckbox} /> <label htmlFor='spirits'>Spirits</label><br />
                                    <input type="checkbox" name="wine" checked={checked.wine} onChange={handleCheckbox} /> <label htmlFor='wine'>Wine</label><br />
                                </div>)
                                : null}
                        </td>
                        <td style={{width: '55%', verticalAlign: 'top'}}>
                            {inputFields}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Beverage;