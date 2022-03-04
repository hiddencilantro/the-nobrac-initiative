import { useNavigate } from 'react-router-dom';

function TobaccoForm({display, tobacco, setTobacco}) {
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if(isNaN(tobacco)) {
            setTobacco(pS => ({...pS, parameters: {...pS.parameters, money: 0}}));
        };
        navigate('/survey/goods');
    };

    const handleNext = () => {
        setTobacco(pS => ({...pS, parameters: {...pS.parameters, money: 0}}));
        navigate('/survey/goods');
    };

    if (display === "true") {
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="tobacco-money-input">How much do you approximately spend on cigarettes per year?</label>
                <br />
                $<input 
                    type="number" 
                    id="tobacco-money-input" 
                    placeholder="0"
                    value={(tobacco === 0 || isNaN(tobacco)) ? "" : tobacco} 
                    onChange={e => setTobacco(pS => ({...pS, parameters: {...pS.parameters, money: e.target.valueAsNumber}}))} />
                <br />
                <input type="submit" value="Next"/>
            </form>
        );
    } else if (display === "false") {
        return <button type="button" onClick={handleNext}>Next</button>;
    } else {
        return null;
    };
}

export default TobaccoForm;