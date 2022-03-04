import { useNavigate } from 'react-router-dom';

function Water({water, setWater}) {
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if(isNaN(water)) {
            setWater(pS => ({...pS, parameters: {...pS.parameters, money: 0}}));
        };
        navigate('/survey/food');
    };

    return (
        <form onSubmit={handleSubmit}>
            <br />
            <label htmlFor="water-money-input">How much is your average water bill?</label>
            <br />
            $<input 
                type="number" 
                id="water-money-input" 
                placeholder="0"
                value={(water === 0 || isNaN(water)) ? "" : water} 
                onChange={e => setWater(pS => ({...pS, parameters: {...pS.parameters, money: (e.target.valueAsNumber)}}))} /> per month
            <br />
            <input type="submit" value="Next"/>
        </form>
    );
}

export default Water;