import { useEffect } from 'react';

function Electricity({setActiveStep, setToggle, electricity, setElectricity}) {
    useEffect(() => {
        setActiveStep(3);
        setToggle(true)
    }, []);

    return (
        <div className='Electricity'>
            <h3><label htmlFor="electricity-money-input">How much is your average electricity bill?</label></h3>
            $ <input 
                type="number" 
                id="electricity-money-input" 
                placeholder="0"
                min="0"
                value={electricity === 0 ? "" : Math.max(0, electricity)} 
                onChange={e => setElectricity(pS => ({...pS, parameters: {...pS.parameters, money: Number(e.target.value)}}))} /> per month
        </div>
    );
}

export default Electricity;