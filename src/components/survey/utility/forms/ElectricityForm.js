import { useNavigate } from 'react-router-dom';

function ElectricityForm({electricity, setElectricity}) {
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if(isNaN(electricity)) {
            setElectricity(pS => ({...pS, parameters: {...pS.parameters, money: 0}}));
        };
        navigate('/survey/utility/natural-gas');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="electricity-money-input">How much is your average electricity bill?</label>
            <br /><br />
            $<input 
                type="number" 
                id="electricity-money-input" 
                placeholder="0"
                value={(electricity === 0 || isNaN(electricity)) ? "" : electricity} 
                onChange={e => setElectricity(pS => ({...pS, parameters: {...pS.parameters, money: (e.target.valueAsNumber)}}))} /> per month
            <br /><br />
            <input type="submit" value="Next"/>
        </form>
    );
}

export default ElectricityForm;