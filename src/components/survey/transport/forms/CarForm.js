// import { useNavigate } from 'react-router-dom';

function CarForm({display, car, setCar}) {
    // const navigate = useNavigate();

    const handleNext = e => {
        e.preventDefault();
        // navigate('/survey/transport/bus')
    };

    if (display === "true") {
        return (
            <form onSubmit={handleNext}>
                <label htmlFor="car">How many miles do you drive per year?</label>
                <br />
                <input type="text" id="car" value={car} onChange={e => isNaN(e.target.value) ? e.target.value="" : setCar(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.value}}))} /> miles
                <br />
                <input type="submit" value="Next"/>
            </form>
        );
    } else if (display === "false") {
        return <button onClick={handleNext}>Next</button>;
    } else {
        return null;
    };
}

export default CarForm;