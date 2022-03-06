import { useEffect } from 'react';

function Electricity({setActiveStep, electricity, setElectricity}) {
    useEffect(() => {
        setActiveStep(3);
    }, []);

    return (
        <div>
            <br />
            <label htmlFor="electricity-money-input">How much is your average electricity bill?</label>
            <br />
            $<input 
                type="number" 
                id="electricity-money-input" 
                placeholder="0"
                value={(electricity === 0 || isNaN(electricity)) ? "" : electricity} 
                onChange={e => setElectricity(pS => ({...pS, parameters: {...pS.parameters, money: (e.target.valueAsNumber)}}))} /> per month
        </div>
    );
}

export default Electricity;