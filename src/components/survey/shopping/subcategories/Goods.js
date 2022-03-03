import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemInput from '../../consumption/forms/ItemInput';

function Goods({goods, setGoods}) {
    const [checked, setChecked] = useState({
        clothing: false,
        booksAndOtherPrint: false,
        toysAndGames: false,
        sportingGoods: false,
        dogAndCatFood: false,
        generalMerchandise: false,
        nonstoreRetailers: false,
        otherRetail: false
    });
    const navigate = useNavigate();

    const handleCheckbox = e => {
        setChecked(pS => ({...pS, [e.target.name]: e.target.checked}));
    };

    const handleNext = () => {
        sanitizeInput();
        navigate('/survey/shopping/services');
    };

    const sanitizeInput = () => {
        Object.entries(goods).forEach(([goodType, obj]) => {
            if(!checked[goodType] || isNaN(obj.parameters.money)) {
                setGoods(pS => ({
                    ...pS, 
                    [goodType]: {
                        ...pS[goodType], 
                        parameters: {
                            ...pS[goodType].parameters, 
                            money: 0
                        }
                    }
                }));
            };
        });
    };

    const inputFields = Object.entries(goods).map(([good, object]) => <ItemInput key={good} checked={checked[good]} item={good} money={object.parameters.money} setState={setGoods} />)

    return (
        <>
            <p>How much do you spend on any of the following goods?</p>
            <table style={{width: '60%', marginLeft: '20%', marginRight: '20%'}}>
                <tbody>
                    <tr>
                        <td style={{width: '50%'}}>
                            <div>
                                <input type="checkbox" name="clothing" checked={checked.clothing} onChange={handleCheckbox} /> <label htmlFor='clothing'>Clothing</label><br />
                                <input type="checkbox" name="booksAndOtherPrint" checked={checked.booksAndOtherPrint} onChange={handleCheckbox} /> <label htmlFor='booksAndOtherPrint'>Books/Newspapers/Magazines</label><br />
                                <input type="checkbox" name="toysAndGames" checked={checked.toysAndGames} onChange={handleCheckbox} /> <label htmlFor='toysAndGames'>Toys/Games</label><br />
                                <input type="checkbox" name="sportingGoods" checked={checked.sportingGoods} onChange={handleCheckbox} /> <label htmlFor='sportingGoods'>Sporting/Athletic Goods</label><br />
                                <input type="checkbox" name="dogAndCatFood" checked={checked.dogAndCatFood} onChange={handleCheckbox} /> <label htmlFor='dogAndCatFood'>Dog/Cat Food</label><br />
                                <input type="checkbox" name="generalMerchandise" checked={checked.generalMerchandise} onChange={handleCheckbox} /> <label htmlFor='generalMerchandise'>General Merchandise</label><br />
                                <input type="checkbox" name="nonstoreRetailers" checked={checked.nonstoreRetailers} onChange={handleCheckbox} /> <label htmlFor='nonstoreRetailers'>Nonstore Retailers (i.e. e-commerce, street vendors)</label><br />
                                <input type="checkbox" name="otherRetail" checked={checked.otherRetail} onChange={handleCheckbox} /> <label htmlFor='otherRetail'>All Other Retail</label><br />
                            </div>
                        </td>
                        <td style={{width: '50%', verticalAlign: 'top'}}>
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

export default Goods;