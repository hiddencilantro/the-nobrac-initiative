import { useEffect } from 'react';

function NaturalGas({setActiveStep, setToggle, naturalGas, setNaturalGas}) {
    useEffect(() => {
        setActiveStep(4);
        setToggle(true);
    }, []);

    return (
        <div className='NaturalGas'>
            <h3><label htmlFor="natural-gas-money-input">How much is your average gas bill?</label></h3>
            $ <input 
                type="number" 
                id="natural-gas-money-input" 
                placeholder="0"
                min="0"
                value={naturalGas === 0 ? "" : Math.max(0, naturalGas)} 
                onChange={e => setNaturalGas(pS => ({...pS, parameters: {...pS.parameters, money: Number(e.target.value)}}))} /> per month
        </div>
    );
}

export default NaturalGas;