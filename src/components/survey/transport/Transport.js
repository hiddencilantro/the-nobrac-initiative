import { Routes, Route } from 'react-router-dom';
import Car from './subcategories/Car';
import PublicTransit from './subcategories/PublicTransit';
import Flight from './subcategories/Flight'

function Transport({car, setCar, publicTransit, setPublicTransit, flight, setFlight}) {
    return (
        <Routes>
            <Route 
                path="car" 
                element={<Car 
                    car={car} setCar={setCar} />} />
            <Route 
                path="public-transit" 
                element={<PublicTransit 
                    publicTransit={publicTransit} setPublicTransit={setPublicTransit} />} />
            <Route 
                path="flight"
                element={<Flight 
                    flight={flight} setFlight={setFlight} />} />
        </Routes>
    );
}

export default Transport;