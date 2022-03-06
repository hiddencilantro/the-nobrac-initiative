import { useEffect } from 'react';

function NaturalGas({setActiveStep, naturalGas, setNaturalGas}) {
    useEffect(() => {
        setActiveStep(4);
    }, []);

    return (
        <div>
            <br />
            <label htmlFor="natural-gas-money-input">How much is your average gas bill?</label>
            <br />
            $<input 
                type="number" 
                id="natural-gas-money-input" 
                placeholder="0"
                value={(naturalGas === 0 || isNaN(naturalGas)) ? "" : naturalGas} 
                onChange={e => setNaturalGas(pS => ({...pS, parameters: {...pS.parameters, money: (e.target.valueAsNumber)}}))} /> per month
        </div>
    );
}

export default NaturalGas;