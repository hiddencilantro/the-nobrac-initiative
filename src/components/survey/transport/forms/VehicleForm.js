import { useNavigate } from 'react-router-dom';

function VehicleForm({display, vehicle, setVehicle}) {
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if(isNaN(vehicle)) {
            setVehicle(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
        };
        navigate('/survey/transport/public-transit');
    };

    const handleNext = () => {
        setVehicle(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
        navigate('/survey/transport/public-transit');
    };

    if (display === "true") {
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="vehicle-miles-input">How many miles do you drive per year?</label>
                <br />
                <input 
                    type="number" 
                    id="vehicle-miles-input" 
                    placeholder="0"
                    value={(vehicle === 0 || isNaN(vehicle)) ? "" : vehicle} 
                    onChange={e => setVehicle(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.valueAsNumber}}))} /> miles
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

export default VehicleForm;