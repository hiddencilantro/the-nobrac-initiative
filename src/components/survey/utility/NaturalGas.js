import { useNavigate } from 'react-router-dom';

function NaturalGas({naturalGas, setNaturalGas}) {
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if(isNaN(naturalGas)) {
            setNaturalGas(pS => ({...pS, parameters: {...pS.parameters, money: 0}}));
        };
        navigate('/survey/water');
    };

    return (
        <form onSubmit={handleSubmit}>
            <br />
            <label htmlFor="natural-gas-money-input">How much is your average gas bill?</label>
            <br />
            $<input 
                type="number" 
                id="natural-gas-money-input" 
                placeholder="0"
                value={(naturalGas === 0 || isNaN(naturalGas)) ? "" : naturalGas} 
                onChange={e => setNaturalGas(pS => ({...pS, parameters: {...pS.parameters, money: (e.target.valueAsNumber)}}))} /> per month
            <br />
            <input type="submit" value="Next"/>
        </form>
    );
}

export default NaturalGas;