import { useEffect } from 'react';

function Water({setActiveStep, water, setWater}) {
    useEffect(() => {
        setActiveStep(5);
    }, []);

    return (
        <div>
            <br />
            <label htmlFor="water-money-input">How much is your average water bill?</label>
            <br />
            $<input 
                type="number" 
                id="water-money-input" 
                placeholder="0"
                min="0"
                value={water === 0 ? "" : Math.max(0, water)} 
                onChange={e => setWater(pS => ({...pS, parameters: {...pS.parameters, money: Number(e.target.value)}}))} /> per month
        </div>
    );
}

export default Water;