import { useNavigate } from 'react-router-dom';

function CarForm({display, car, setCar}) {
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if(car === "") {
            setCar(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
        };
        navigate('/survey/transport/public-transit');
    };

    const handleNext = () => {
        setCar(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
        navigate('/survey/transport/public-transit');
    };

    if (display === "true") {
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="car-miles-input">How many miles do you drive per year?</label>
                <br /><br />
                <input 
                    type="text" 
                    id="car-miles-input" 
                    placeholder="0"
                    value={car === 0 ? "" : car} 
                    onChange={e => isNaN(e.target.value) ? e.target.value="" : setCar(pS => ({...pS, parameters: {...pS.parameters, distance: parseInt(e.target.value)}}))} /> miles
                <br /><br />
                <input type="submit" value="Next"/>
            </form>
        );
    } else if (display === "false") {
        return <button type="button" onClick={handleNext}>Next</button>;
    } else {
        return null;
    };
}

export default CarForm;