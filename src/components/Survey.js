import { Routes, Route } from 'react-router-dom';
// import Categories from './survey/Categories'
import Transport from './survey/transport/Transport';
import Energy from './survey/energy/Energy';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';

function Survey() {
    const [car, setCar] = useState({
        "emission_factor": "passenger_vehicle-vehicle_type_car-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na",
        "parameters": {
            "passengers": 1,
            "distance": 0,
            "distance_unit": "mi"
        }
    });
    const [bus, setBus] = useState({
        "emission_factor": "passenger_vehicle-vehicle_type_bus-fuel_source_na-distance_na-engine_size_na",
        "parameters": {
            "passengers": 1,
            "distance": 0,
            "distance_unit": "mi"
        }
    });
    const [rapid, setRapid] = useState({
        "emission_factor": "passenger_train-route_type_transit_rail-fuel_source_na",
        "parameters": {
            "passengers": 1,
            "distance": 0,
            "distance_unit": "mi"
        }
    });
    const [commuter, setCommuter] = useState({
        "emission_factor": "passenger_train-route_type_commuter_rail-fuel_source_na",
        "parameters": {
            "passengers": 1,
            "distance": 0,
            "distance_unit": "mi"
        }
    });
    const [intercity, setIntercity] = useState({
        "emission_factor": "passenger_train-route_type_intercity-fuel_source_na",
        "parameters": {
            "passengers": 1,
            "distance": 0,
            "distance_unit": "mi"
        }
    });
    const [shortFlight, setShortFlight] = useState({
        "emission_factor": "passenger_flight-route_type_na-aircraft_type_na-distance_lt_300mi-class_na-rf_na",
        "parameters": {
            "passengers": 1,
            "distance": 0,
            "distance_unit": "mi"
        }
    });
    const [mediumFlight, setMediumFlight] = useState({
        "emission_factor": "passenger_flight-route_type_na-aircraft_type_na-distance_gt_300mi_lt_2300mi-class_na-rf_na",
        "parameters": {
            "passengers": 1,
            "distance": 0,
            "distance_unit": "mi"
        }
    });
    const [longFlight, setLongFlight] = useState({
        "emission_factor": "passenger_flight-route_type_na-aircraft_type_na-distance_gt_2300mi-class_na-rf_na",
        "parameters": {
            "passengers": 1,
            "distance": 0,
            "distance_unit": "mi"
        }
    });

    // const dispatch = useDispatch();

    // const userInput = [car, bus, rapid, commuter, intercity, shortFlight, mediumFlight, longFlight];

    // const sendDispatch = () => {
    //   dispatch(calculateFootprint(userInput));
    // };

    return (
        <div>
            {/* <Categories /> */}
            <br />
            <Routes>
                <Route 
                    path="transport/*" 
                    element={<Transport 
                        car={car.parameters.distance} setCar={setCar} 
                        bus={bus.parameters.distance} setBus={setBus} 
                        rapid={rapid.parameters.distance} setRapid={setRapid} 
                        commuter={commuter.parameters.distance} setCommuter={setCommuter} 
                        intercity={intercity.parameters.distance} setIntercity={setIntercity} 
                        shortFlight={shortFlight.parameters.distance} setShortFlight={setShortFlight} 
                        mediumFlight={mediumFlight.parameters.distance} setMediumFlight={setMediumFlight} 
                        longFlight={longFlight.parameters.distance} setLongFlight={setLongFlight} />} />
                <Route 
                    path="energy/*" 
                    element={<Energy />} />
            </Routes>
        </div>
    );
}

export default Survey;
