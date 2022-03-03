import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemInput from '../forms/ItemInput';

function Beverage({beverages, setBeverages}) {
    const [checked, setChecked] = useState({
        coffeeAndTea: false,
        softDrinksAndBottledWater: false,
        beer: false,
        spirits: false,
        wine: false
    });
    const navigate = useNavigate();

    const handleCheckbox = e => {
        setChecked(pS => ({...pS, [e.target.name]: e.target.checked}));
    };

    const handleNext = () => {
        sanitizeInput();
        navigate('/survey/consumption/dining');
    };

    const sanitizeInput = () => {
        Object.entries(beverages).forEach(([beverageType, obj]) => {
            if(!checked[beverageType] || isNaN(obj.parameters.money)) {
                setBeverages(pS => ({
                    ...pS, 
                    [beverageType]: {
                        ...pS[beverageType], 
                        parameters: {
                            ...pS[beverageType].parameters, 
                            money: 0
                        }
                    }
                }));
            };
        });
    };

    const inputFields = Object.entries(beverages).map(([beverage, object]) => <ItemInput key={beverage} checked={checked[beverage]} item={beverage} money={object.parameters.money} setState={setBeverages} />)

    return (
        <>
            <p>How much do you spend on beverages?</p>
            <table style={{width: '60%', marginLeft: '20%', marginRight: '20%'}}>
                <tbody>
                    <tr>
                        <td style={{width: '35%'}}>
                            <div>
                                <input type="checkbox" name="coffeeAndTea" checked={checked.coffeeAndTea} onChange={handleCheckbox} /> <label htmlFor='coffeeAndTea'>Coffee And Tea</label><br />
                                <input type="checkbox" name="softDrinksAndBottledWater" checked={checked.softDrinksAndBottledWater} onChange={handleCheckbox} /> <label htmlFor='softDrinksAndBottledWater'>Soft Drinks and Bottled Water</label><br />
                                <input type="checkbox" name="beer" checked={checked.beer} onChange={handleCheckbox} /> <label htmlFor='beer'>Beer</label><br />
                                <input type="checkbox" name="spirits" checked={checked.spirits} onChange={handleCheckbox} /> <label htmlFor='spirits'>Spirits</label><br />
                                <input type="checkbox" name="wine" checked={checked.wine} onChange={handleCheckbox} /> <label htmlFor='wine'>Wine</label><br />
                            </div>
                        </td>
                        <td style={{width: '65%', verticalAlign: 'top'}}>
                            {inputFields}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={'2'}>
                            <button type="button" onClick={handleNext}>Next</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Beverage;