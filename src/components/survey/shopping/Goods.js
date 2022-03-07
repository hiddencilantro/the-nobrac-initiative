import { useEffect } from 'react';
import ItemInput from '../consumption/inputs/ItemInput';

function Goods({setActiveStep, checked, setChecked, goods, setGoods}) {
    useEffect(() => {
        setActiveStep(10);
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
    };

    const inputFields = Object.entries(goods).map(([good, object]) => <ItemInput key={good} checked={checked[good]} item={good} money={object.parameters.money} setState={setGoods} />)

    return (
        <>
            <p>How much do you spend on any of the following goods?</p>
            <table style={{width: '60%', marginLeft: '20%', marginRight: '20%'}}>
                <tbody>
                    <tr>
                        <td style={{width: '50%'}}>
                            {checked.hasOwnProperty('clothing') ? 
                                (<div>
                                    <input type="checkbox" name="clothing" checked={checked.clothing} onChange={handleCheckbox} /> <label htmlFor='clothing'>Clothing</label><br />
                                    <input type="checkbox" name="booksAndOtherPrint" checked={checked.booksAndOtherPrint} onChange={handleCheckbox} /> <label htmlFor='booksAndOtherPrint'>Books/Newspapers/Magazines</label><br />
                                    <input type="checkbox" name="toysAndGames" checked={checked.toysAndGames} onChange={handleCheckbox} /> <label htmlFor='toysAndGames'>Toys/Games</label><br />
                                    <input type="checkbox" name="sportingGoods" checked={checked.sportingGoods} onChange={handleCheckbox} /> <label htmlFor='sportingGoods'>Sporting/Athletic Goods</label><br />
                                    <input type="checkbox" name="dogAndCatFood" checked={checked.dogAndCatFood} onChange={handleCheckbox} /> <label htmlFor='dogAndCatFood'>Dog/Cat Food</label><br />
                                    <input type="checkbox" name="health" checked={checked.health} onChange={handleCheckbox} /> <label htmlFor='health'>Health/Personal Care</label><br />
                                    <input type="checkbox" name="generalMerchandise" checked={checked.generalMerchandise} onChange={handleCheckbox} /> <label htmlFor='generalMerchandise'>General Merchandise</label><br />
                                    <input type="checkbox" name="nonstoreRetailers" checked={checked.nonstoreRetailers} onChange={handleCheckbox} /> <label htmlFor='nonstoreRetailers'>Nonstore Retailers (i.e. e-commerce, street vendors)</label><br />
                                    <input type="checkbox" name="otherRetail" checked={checked.otherRetail} onChange={handleCheckbox} /> <label htmlFor='otherRetail'>All Other Retail</label><br />
                                </div>)
                                : null}
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

export default Goods;